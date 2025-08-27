import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  parkingLot: { type: mongoose.Schema.Types.ObjectId, ref: "ParkingLot" },
  partnerCompany: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PartnerCompany",
  },

  startTime: Date,
  endTime: Date,
  totalAmount: { type: Number, required: true },

  commission: { type: Number, required: true }, // system cut
  companyEarning: { type: Number, required: true }, // what partner gets
  status: {
    type: String,
    enum: ["booked", "completed", "canceled"],
    default: "booked",
  },
});

export const Booking = mongoose.model("Booking", bookingSchema);
