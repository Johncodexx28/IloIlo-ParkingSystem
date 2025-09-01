import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    parkingLot: { type: mongoose.Schema.Types.ObjectId, ref: "ParkingLot" },
    parkingSpot: { type: mongoose.Schema.Types.ObjectId, ref: "ParkingSpot" },
    bookingCode: { type: String, required: true, unique: true },
    startTime: Date,
    endTime: Date,
    totalAmount: { type: Number, required: true, default: 0 },

    isPaid: { type: Boolean, default: false },
    paymentMethod: {
      type: String,
      enum: ["cash", "card", "mobile"],
      default: "cash",
    },

    status: {
      type: String,
      enum: ["booked", "active", "completed", "canceled"],
      default: "booked",
    },
    checkedInAt: Date,
    checkedOutAt: Date,
  },
  { timestamps: true }
);

export const Booking = mongoose.model("Booking", bookingSchema);
