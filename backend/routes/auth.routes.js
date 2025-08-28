import express from "express";

import {
  signup,
  login,
  logout,
  login_partner,
  signup_partner,
  logout_partner,
} from "../controllers/auth.controller.js";

const router = express.Router();
router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);
router.post("/login-partner", login_partner);
router.post("/signup-partner", signup_partner);
router.post("/logout-partner", logout_partner);

export default router;
