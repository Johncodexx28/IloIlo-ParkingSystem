import bcryptjs from "bcryptjs";

import { User } from "../models/user.model.js";
import { PartnerCompany } from "../models/partnerCompany.model.js";
import { Admin } from "../models/admin.model.js";
import { ParkingLots } from "../models/parkingLots.model.js";
import { ParkingSpot } from "../models/parkingSpot.model.js";
import { ParkingSession } from "../models/parkingSession.model.js";
import { Booking } from "../models/bookingLot.model.js";

export const handleParkingEntry = async (req, res) => {
  const { rfidTag } = req.body;
  const now = new Date();

  try {
    const user = await User.findOne({ rfidTag });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    const UserBooking = await Booking.find({ user: user._id });
  } catch (error) {
    console.error("Error handling parking entry:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

// user endpoints

export const bookParking = async (req, res) => {
  try {
    const {
      rfidTag,
      parkingLot,
      parkingSpot,
      startTime,
      endTime,
      totalAmount,
      paymentMethod,
    } = req.body;

    const user = await User.findOne({ rfidTag });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // 2. Validate times
    if (new Date(endTime) <= new Date(startTime)) {
      return res
        .status(400)
        .json({ success: false, message: "End time must be after start time" });
    }

    const conflict = await Booking.findOne({
      user: user._id,
      $or: [
        { startTime: { $lt: endTime }, endTime: { $gt: startTime } }, // time overlap
      ],
      status: { $in: ["booked", "active"] },
    });

    if (conflict) {
      return res.status(400).json({
        success: false,
        message: "User already has a booking during this time",
      });
    }

    const spot = await ParkingSpot.findOne({
      _id: parkingSpot,
      lot: parkingLot,
    });
    if (!spot) {
      return res
        .status(404)
        .json({ success: false, message: "Parking spot not found" });
    }
    if (spot.status !== "available") {
      return res.status(400).json({
        success: false,
        message: "Parking spot is not available",
      });
    }

    const bookingCode = `BKG-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    const booking = new Booking({
      user: user._id,
      parkingLot,
      parkingSpot,
      bookingCode,
      startTime,
      endTime,
      totalAmount,
      paymentMethod,
      isPaid: false,
      status: "booked",
    });

    await booking.save();

    spot.status = "booked";
    await spot.save();

    await ParkingLots.findByIdAndUpdate(parkingLot, {
      $inc: { availableSlots: -1 },
    });

    return res.status(201).json({
      success: true,
      message: "Booking created successfully",
      booking,
    });
  } catch (error) {
    console.error("Error creating booking:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

export const addParkingLot = async (req, res) => {
  try {
    const { LotName, location, capacity, hourlyRate } = req.body;
    const partnerCompanyId = req.partnerId; // comes from token (since partner is logged in)

    if (!LotName || !location || !capacity || !hourlyRate) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const parkingLot = new ParkingLots({
      LotName,
      location,
      capacity,
      availableSlots: capacity,
      hourlyRate,
      partnerCompany: partnerCompanyId,
    });

    await parkingLot.save();

    const spots = [];
    for (let i = 1; i <= capacity; i++) {
      spots.push({
        lot: parkingLot._id,
        spotNumber: `S${i}`, // example: S1, S2, ...
        status: "available",
      });
    }

    await ParkingSpot.insertMany(spots);

    return res.status(201).json({
      success: true,
      message: "Parking lot and spots created successfully",
      parkingLot,
    });
  } catch (error) {
    console.error("Error adding parking lot:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
