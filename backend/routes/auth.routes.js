import express from "express";

import {
  signup,
  login,
  logout,
  login_admin,
  login_partner,
  signup_partner,
  verifyEmail,
  resetPassword,
  checkAuth,
  forgotPassword,
  verify_partner,
  partnership_approval,
} from "../controllers/auth.controller.js";

import { verifyToken } from "../middleware/verifyToken.js";
import { requireRole } from "../middleware/requireRole.js";

const router = express.Router();


// Common routes
router.get("/check-auth", verifyToken, checkAuth);

// User Routes
router.post("/login",login);
router.post("/verify-email", verifyEmail);
router.post("/signup", signup);
router.post("/logout", logout);
router.post("/reset-password/:token", resetPassword);
router.post("/forgot-password", forgotPassword);

//Admin Routes
router.post("/login-admin", login_admin);
router.post("/admin/partnership-approval", requireRole("admin"), partnership_approval);

// Partner Routes
router.post("/login-partner", login_partner);
router.post("/signup-partner", signup_partner);
router.post("/partner-verify", verify_partner);

export default router;
