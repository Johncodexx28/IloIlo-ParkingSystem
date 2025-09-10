import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import { requireRole } from "../middleware/requireRole.js";

import {
  getPartnerRFIDRequests,
  assignUserRFID,
} from "../controllers/partnerCompany.controller.js";

const router = express.Router();

router.get(
  "/getRFIDrequest",
  verifyToken,
  requireRole("partner"),
  getPartnerRFIDRequests
);

router.put("/assignRFID", verifyToken, requireRole("partner"), assignUserRFID);

export default router;
