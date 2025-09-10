import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

import authRoutes from "../routes/auth.routes.js";
import parkingRoutes from "../routes/parking.routes.js";
import userRoutes from "../routes/user.routes.js";
import partnerRoutes from "../routes/partnerCompany.routes.js";
import { connectDB } from "../config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/parking", parkingRoutes);
app.use("/api/user", userRoutes);
app.use("/api/partner", partnerRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on port: ", PORT);
});
