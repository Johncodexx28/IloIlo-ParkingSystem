import express from "express";

import {
  signup,
  login,
  logout,
  login_partner,
  signup_partner,
  logout_partner,
  verifyEmail,
} from "../controllers/auth.controller.js";


// User Routes

const router = express.Router();
router.post("/login", login);
router.post("/verify-email", verifyEmail);
router.post("/signup", signup);
router.post("/logout", logout);










// Partner Routes

router.post("/login-partner", login_partner);
router.post("/signup-partner", signup_partner);
router.post("/logout-partner", logout_partner);

export default router;
