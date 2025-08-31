import jwt from "jsonwebtoken";
import dotenv from "dotenv";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized ~ no token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded)
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized ~ invalid token" });

    // Store all possible role IDs in req
    req.userId = decoded.userId || null;
    req.partnerId = decoded.partnerId || null;
    req.adminId = decoded.adminId || null;
    req.role = decoded.role || "user"; 

    next();
  } catch (error) {
    console.log("Error in VerifyToken", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
