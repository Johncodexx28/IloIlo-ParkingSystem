import { User } from "../models/user.model.js";

export const bookings_quantity = async (req, res) => {
  try {
    const userId = req.userId;

    const user = await User.findById(userId).select("phone bookings");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const count = user.bookings ? user.bookings.length : 0;

    res.status(200).json({ bookingsCount: count });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
