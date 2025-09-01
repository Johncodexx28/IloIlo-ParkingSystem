import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (res, id, role) => {
  const payload = { role };

  if (role === "user") payload.userId = id;
  if (role === "partner") payload.partnerId = id;
  if (role === "admin") payload.adminId = id;

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, 
  });

  return token;
};
