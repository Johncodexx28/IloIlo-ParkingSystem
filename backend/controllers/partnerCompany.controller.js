import { User } from "../models/user.model.js";
import { PartnerCompany } from "../models/partnerCompany.model.js";
import { Admin } from "../models/admin.model.js";
import { RFIDRequest } from "../models/rfidRequest.model.js";

export const getPartnerRFIDRequests = async (req, res) => {
  try {
    const partnerId = req.partnerId;

    const requests = await RFIDRequest.find({ partner: partnerId })
      .populate("user", "_id fullname email rfidTag")
      .populate("partner", "companyName claimingSites");

    res.status(200).json(requests);
  } catch (error) {
    console.error("Error fetching partner RFID requests:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const assignUserRFID = async (req, res) => {
  try {
    const { userId, rfidNumber } = req.body;

    const existingRequest = await RFIDRequest.findOne({ user: userId });
    if (!existingRequest) {
      return res
        .status(404)
        .json({ message: "No request found for this user" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.rfidTag = rfidNumber;
    await user.save();

    existingRequest.status = "Ready for Pickup";
    await existingRequest.save();

    res.status(200).json({
      message: "RFID assigned successfully",
      request: existingRequest,
    });
  } catch (error) {
    console.error("Failed to assign RFID:", error);
    res.status(500).json({ message: "Server error" });
  }
};
