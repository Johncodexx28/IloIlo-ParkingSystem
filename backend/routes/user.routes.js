import express from "express";
import {
  bookings_quantity,
  requestRFIDTag,
  getPartners,
} from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { requireRole } from "../middleware/requireRole.js";

const router = express.Router();

router.post("/request_rfidTag", verifyToken, requireRole("user"),requestRFIDTag);
router.get( "/bookings-quantity",verifyToken,requireRole("user"),bookings_quantity);
router.get("/getpartner-data", verifyToken, requireRole("user"), getPartners);

export default router;
