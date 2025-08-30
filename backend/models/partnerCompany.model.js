import mongoose from "mongoose";

const partnerCompanySchema = new mongoose.Schema(
  {
    companyName: {
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

    role: {
      type: String,
      default: "partner",
    },
    address: String,
    contactNumber: String,
    parkingSpots: [{ type: mongoose.Schema.Types.ObjectId, ref: "ParkingLot" }],
    balance: { type: Number, default: 0 },
    revenue: { type: Number, default: 0 },
    logo: {
      type: String,
      default: "default_logo.png",
    },

    isPartnerShipAccepted: {
      type: Boolean,
      default: false,
    },
    verificationToken: String,
    verificationTokenExpiresAt: Date,
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
  },
  { timestamps: true }
);

export const PartnerCompany = mongoose.model(
  "PartnerCompany",
  partnerCompanySchema
);
