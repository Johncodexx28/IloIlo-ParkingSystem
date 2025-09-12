import { User } from "../models/user.model.js";
import { PartnerCompany } from "../models/partnerCompany.model.js";
import { Admin } from "../models/admin.model.js";
import { RFIDRequest } from "../models/rfidRequest.model.js";

export const getPartners = async (req, res) => {
  try {
    const partners = await PartnerCompany.find();
    res.json(partners);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch partners" });
  }
};

export const requestRFIDTag = async (req, res) => {
  const userId = req.userId;
  const { partnerId, claimingSite } = req.body;

  try {
    // Validate required fields
    if (!userId || !partnerId || !claimingSite) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    // Check for existing request
    const existingRequest = await RFIDRequest.findOne({ user: userId });

    if (existingRequest) {
      return res.status(400).json({
        success: false,
        message:
          "You have already submitted an RFID request. Please wait for approval.",
      });
    }

    // Create new RFID request
    const rfidRequest = new RFIDRequest({
      user: userId,
      partner: partnerId,
      claimingSite,
      status: "Pending",
    });

    await rfidRequest.save();

    return res.status(201).json({
      success: true,
      message: "RFID request submitted successfully",
      data: rfidRequest,
    });
  } catch (error) {
    console.error("Error creating RFID request:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to request RFID tag",
      error: error.message,
    });
  }
};

export const bookings_quantity = async (req, res) => {
  try {
    const userId = req.userId;

    const user = await User.findById(userId).select("phone bookings");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const count = user.bookings ? user.bookings.length : 0;

    res.status(200).json({ bookingsCount: count });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
