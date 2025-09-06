import bcryptjs from "bcryptjs";
import crypto from "crypto";

import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import {
  sendPasswordResetEmail,
  sendResetSuccessEmail,
  sendVerificationEmail,
  sendWelcomeEmail,
  sendPartnerShipEmail,
  sendPartnerShipWelcomeEmail,
  sendApprovalEmail,
} from "../nodemailer/emails.js";

import { User } from "../models/user.model.js";
import { PartnerCompany } from "../models/partnerCompany.model.js";
import { Admin } from "../models/admin.model.js";

// Common Controllers

export const checkAuth = async (req, res) => {
  try {
    let account = null;

    switch (req.role) {
      case "user":
        if (req.userId)
          account = await User.findById(req.userId).select("-password");
        break;
      case "partner":
        if (req.partnerId) {
          account = await PartnerCompany.findById(req.partnerId).select(
            "-password"
          );
          if (account && !account.isPartnerShipAccepted) {
            return res.status(403).json({
              success: false,
              message: "Partnership not accepted yet",
            });
          }
        }
        break;
      case "admin":
        if (req.adminId)
          account = await Admin.findById(req.adminId).select("-password");
        break;
      default:
        return res
          .status(401)
          .json({ success: false, message: "Invalid role" });
    }

    if (!account)
      return res
        .status(404)
        .json({ success: false, message: "Account not found" });

    res.status(200).json({ success: true, role: req.role, account });
  } catch (error) {
    console.error("Error in checkAuth:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const logout = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ success: true, message: "Logged out successfully" });
};

// User Auth Controllers

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
      rfidTag: null,
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
    console.error("Signup error:", error);
    res.status(500).json({ message: error.message || "Server error" });
  }
};

export const verifyEmail = async (req, res) => {
  const { code } = req.body;

  try {
    const user = await User.findOne({
      verificationToken: code,
      verificationTokenExpiresAt: { $gt: Date.now() },
    });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Invalid or Expired verification code" });
    }

    if (user.isVerified) {
      return res.status(400).json({ message: "Email already verified" });
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpiresAt = undefined;
    await user.save();

    await sendWelcomeEmail(user.email, user.fullname);

    res.status(200).json({
      success: true,
      message: "Email verified successfully",
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
  const { email, password, role, companyName } = req.body;

  try {
    // ✅ Partner Login
    if (role === "partner") {
      const partner = await PartnerCompany.findOne({ email });
      if (!partner) {
        return res.status(400).json({
          success: false,
          message: "Invalid Company Credentials",
          role: "partner",
        });
      }

      if (companyName !== partner.companyName) {
        return res.status(400).json({
          success: false,
          message: "Invalid Company Name",
          role: "partner",
        });
      }

      const isPasswordValid = await bcryptjs.compare(
        password,
        partner.password
      );
      if (!isPasswordValid) {
        return res.status(400).json({
          success: false,
          message: "Invalid Company Credentials",
          role: "partner",
        });
      }

      if (!partner.isPartnerShipAccepted) {
        return res
          .status(403)
          .json({ message: "Partnership not accepted yet" });
      }

      generateTokenAndSetCookie(res, partner._id, partner.role);

      partner.lastLogin = new Date();
      await partner.save();

      return res.status(200).json({
        success: true,
        message: `Welcome back, ${partner.companyName}!`,
        user: {
          ...partner._doc,
          password: undefined,
        },
      });
    }

    // ✅ Default User Login
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    generateTokenAndSetCookie(res, user._id, user.role);

    user.lastLogin = new Date();
    await user.save();

    res.status(200).json({
      success: true,
      message: `Welcome back, ${user.fullname}!`,
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    console.error("❌ Error in login:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  const { role } = req.params;
  try {
    let account;

    if (role === "user") {
      account = await User.findOne({ email });
    } else if (role === "partner") {
      account = await PartnerCompany.findOne({ email });
    } else if (role === "admin") {
      account = await Admin.findOne({ email });
    }

    if (!account) {
      return res
        .status(400)
        .json({ success: false, message: `${role} not found` });
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(20).toString("hex");
    const resetTokenExpiresAt = Date.now() + 60 * 60 * 1000; // 1 hour

    account.resetPasswordToken = resetToken;
    account.resetPasswordExpiresAt = resetTokenExpiresAt;
    await account.save();

    // Send email
    await sendPasswordResetEmail(
      account.email,
      `${process.env.CLIENT_URL}/reset-password/${role}/${resetToken}`
    );

    res.status(200).json({
      success: true,
      message: `Password reset link sent to ${role} email`,
    });
  } catch (error) {
    console.log("Error in forgotPassword ", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { role, token } = req.params; // comes from /reset-password/:role/:token
    const { password } = req.body;

    let account;
    if (role === "user") {
      account = await User.findOne({
        resetPasswordToken: token,
        resetPasswordExpiresAt: { $gt: Date.now() },
      });
    } else if (role === "partner") {
      account = await PartnerCompany.findOne({
        resetPasswordToken: token,
        resetPasswordExpiresAt: { $gt: Date.now() },
      });
    } else if (role === "admin") {
      account = await Admin.findOne({
        resetPasswordToken: token,
        resetPasswordExpiresAt: { $gt: Date.now() },
      });
    }

    if (!account) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired reset token",
      });
    }

    // Update password
    const hashedPassword = await bcryptjs.hash(password, 10);
    account.password = hashedPassword;
    account.resetPasswordToken = undefined;
    account.resetPasswordExpiresAt = undefined;
    await account.save();

    await sendResetSuccessEmail(account.email);

    res.status(200).json({
      success: true,
      message: `${role} Password reset successful`,
    });
  } catch (error) {
    console.log("Error in resetPassword ", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

// Partner Company Auth Controllers

export const signup_partner = async (req, res) => {
  const { companyName, email, password, address, contactNumber } = req.body;

  try {
    if (!companyName || !email || !password || !address || !contactNumber) {
      throw new Error("Please provide all required fields");
    }

    const partnerAlreadyExists = await PartnerCompany.findOne({ email });
    if (partnerAlreadyExists) {
      return res
        .status(400)
        .json({ message: "Partner Company already exists" });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const partnerCompany = new PartnerCompany({
      companyName,
      email,
      password: hashedPassword,
      address,
      contactNumber,
    });

    await partnerCompany.save();

    // pass token into email
    await sendPartnerShipEmail(
      partnerCompany.email,
      partnerCompany.companyName
    );

    res.status(201).json({
      success: true,
      message:
        "Partner Company created successfully. Please verify your email.",
      partnerCompany: {
        ...partnerCompany._doc,
        password: undefined,
      },
    });
  } catch (error) {
    console.error("❌ Error in signup_partner:", error);
    res.status(500).send("Server error");
  }
};

export const verify_partner = async (req, res) => {
  const { code } = req.body;

  try {
    const partner = await PartnerCompany.findOne({
      verificationToken: code,
      verificationTokenExpiresAt: { $gt: Date.now() }, // not expired
    });

    if (!partner) {
      return res
        .status(400)
        .json({ message: "Invalid or expired verification code." });
    }

    partner.isPartnerShipAccepted = true;
    partner.verificationToken = undefined;
    partner.verificationTokenExpiresAt = undefined;
    await partner.save();

    await sendPartnerShipWelcomeEmail(partner.email, partner.companyName);

    res.status(200).json({
      success: true,
      message:
        "Your partnership has been verified successfully. You can now log in.",
    });
  } catch (error) {
    console.error("❌ Error in verify_partner:", error);
    res.status(500).json({ message: "Server error" });
  }
};

//Admin Controllers

export const login_admin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const isPasswordValid = await bcryptjs.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    generateTokenAndSetCookie(res, admin._id, admin.role);

    admin.lastLogin = new Date();
    await admin.save();
    res.status(200).json({
      success: true,
      message: "Logged in successfully",
      admin: {
        ...admin._doc,
        password: undefined,
      },
    });
  } catch (error) {
    console.error("❌ Error in login_admin:", error);
    res.status(500).send("Server error");
  }
};

export const partnership_approval = async (req, res) => {
  try {
    const { id } = req.body;
    const partner = await PartnerCompany.findById(id);
    if (!partner) return res.status(404).json({ message: "Partner not found" });

    // generate a 6-digit code
    const verificationToken = Math.floor(
      100000 + Math.random() * 900000
    ).toString();
    partner.verificationToken = verificationToken;
    partner.verificationTokenExpiresAt = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
    partner.isPartnerShipAccepted = true;
    await partner.save();

    const loginLink = `${process.env.CLIENT_URL}/login`;
    await sendApprovalEmail(
      partner.email,
      partner.companyName,
      verificationToken,
      loginLink
    );

    res.status(200).json({
      success: true,
      message: "Approval email sent successfully",
    });
  } catch (error) {
    console.error("❌ Error in partnership_approval:", error);
    res.status(500).json({ message: "Server error" });
  }
};
