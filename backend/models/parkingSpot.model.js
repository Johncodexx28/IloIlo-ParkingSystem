import mongoose from "mongoose";

const parkingSpotSchema = new mongoose.Schema({
  lot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ParkingLot",
    required: true,
  },
  spotNumber: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["available", "booked", "occupied", "unavailable"],
    default: "available",
  },
});

export const ParkingSpot = mongoose.model("ParkingSpot", parkingSpotSchema);