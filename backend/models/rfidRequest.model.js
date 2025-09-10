import mongoose from "mongoose";

const RFIDRequestSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  partner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PartnerCompany",
    required: true,
  },
  claimingSite: { type: String, required: true },
  status: {
    type: String,
    enum: ["Pending", "Processing", "Ready for Pickup", "Completed"],
    default: "pending",
  },
  assignedRFID: { type: String },
  requestedAt: { type: Date, default: Date.now },
  approvedAt: { type: Date },
});

export const RFIDRequest = mongoose.model("RFIDRequest", RFIDRequestSchema);
