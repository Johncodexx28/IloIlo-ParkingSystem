import { User } from "../models/user.model.js";
import { PartnerCompany } from "../models/partnerCompany.model.js";
import { Admin } from "../models/admin.model.js";
import { RFIDRequest } from "../models/rfidRequest.model.js";

export const requestRFIDTag = async (req, res) => {
  const userId = req.userId;
  const { partnerId, claimingSite, status } = req.body;
  try {
    const rfidrequests = new RFIDRequest({
      user: userId,
      partner: partnerId,
      claimingSite,
      status,
    });

    await rfidrequests.save();

    res.status(201).json({
      message: "RFID request submitted successfully",
      rfidrequests,
    });
  } catch (error) {
    console.error("Error creating RFID request:", error);
    res.status(500).json({ message: "Failed to request RFID tag" });
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
