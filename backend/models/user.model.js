import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
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
    vehicle: {
      plateNumber: { type: String, required: true },
      type: {
        type: String,
        enum: ["car", "motorcycle", "truck"],
        required: true,
      },
    },
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
  { timestamps: true } //created at and updated at will be automatically added into the document
);

export const User = mongoose.model("User", userSchema);
