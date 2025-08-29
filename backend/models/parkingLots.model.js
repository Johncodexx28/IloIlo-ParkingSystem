import mongoose from "mongoose";

const parkingLotSchema = new mongoose.Schema({
  LotName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  availableSlots: {
    type: Number,
    required: true,
  },
  hourlyRate: {
    type: Number,
    required: true,
  },
  partnerCompany: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PartnerCompany",
  },
});

export const ParkingLots = mongoose.model("ParkingLot", parkingLotSchema);
