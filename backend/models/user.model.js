import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    rfidTag: { type: String, unique: true, sparse: true },
    vehicles: [
      {
        plateNumber: {
          type: String,
          sparse: true,
        },
        type: {
          type: String,
          enum: ["car", "motorcycle", "truck"],
        },
      },
    ],
    bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Booking" }],
    isVerified: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date,
  },
  { timestamps: true } 
);

export const User = mongoose.model("User", userSchema);
