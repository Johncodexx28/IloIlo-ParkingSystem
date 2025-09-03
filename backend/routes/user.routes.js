import express from "express";
import { bookings_quantity } from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { requireRole } from "../middleware/requireRole.js";

const router = express.Router();

router.get(
  "/bookings-quantity",
  verifyToken,
  requireRole("user"),
  bookings_quantity
);

export default router;
