import mongoose from "mongoose";

const mainAdminSchema = new mongoose.Schema({
  name: {
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
    default: "main_admin",
  }, // fixed
  commissionRate: {
    type: Number,
    default: 0.1,
  }, // e.g. 10%
});

export const MainAdmin = mongoose.model("MainAdmin", mainAdminSchema);
