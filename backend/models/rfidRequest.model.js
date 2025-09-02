// models/RFIDRequest.js
import mongoose from "mongoose";

const RFIDRequestSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  partner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Partner",
    required: true,
  },
  location: { type: String, required: true }, // claiming branch
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
  assignedRFID: { type: String },
  requestedAt: { type: Date, default: Date.now },
  approvedAt: { type: Date },
});

export const RFIDRequest = mongoose.model("RFIDRequest", RFIDRequestSchema);
