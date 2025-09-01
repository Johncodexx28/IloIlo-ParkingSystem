import mongoose from "mongoose";

const parkingSessionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    parkingLot: { type: mongoose.Schema.Types.ObjectId, ref: "ParkingLot" },
    parkingSpot: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ParkingSpot",
      required: true,
    },
    entryTime: { type: Date, default: Date.now },
    exitTime: { type: Date },
    duration: { type: Number },

    status: {
      type: String,
      enum: ["ongoing", "completed", "reserved"],
      default: "ongoing",
    },
    payment: {
      amount: Number,
      method: { type: String, enum: ["cash", "gcash", "card"] },
      paidAt: Date,
    },
  },
  { timestamps: true }
);

export const ParkingSession = mongoose.model("ParkingSession", parkingSessionSchema);
