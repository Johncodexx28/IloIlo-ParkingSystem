import bcryptjs from "bcryptjs";
import crypto from "crypto";

import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import {
  sendPasswordResetEmail,
  sendResetSuccessEmail,
  sendVerificationEmail,
  sendWelcomeEmail,
} from "../nodemailer/emails.js";

import { User } from "../models/user.model.js";

export const signup = async (req, res) => {
  const { email, password, fullname, phone } = req.body;
  try {
    if (!email || !password || !fullname || !phone) {
      throw new Error("Please provide all required fields");
    }

    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcryptjs.hash(password, 10);
    const verificationToken = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const user = new User({
      email,
      password: hashedPassword,
      fullname,
      phone,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000,
    });

    await user.save();

    generateTokenAndSetCookie(res, user._id);

    await sendVerificationEmail(user.email, verificationToken);

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

export const login = async (req, res) => {
  res.send("Signup route");
};

export const logout = async (req, res) => {
  res.send("Signup route");
};

export const signup_partner = async (req, res) => {
  const { email, password, name } = req.body;

  try {
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

export const login_partner = async (req, res) => {
  res.send("Signup route partner company");
};

export const logout_partner = async (req, res) => {
  res.send("logout route partner company");
};
