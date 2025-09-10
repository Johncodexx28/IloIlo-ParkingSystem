import express from "express";

import {
  bookParking,
  handleParkingEntry,
  addParkingLot,
  rfidApproval,
} from "../controllers/parking.controller.js";

import { verifyToken } from "../middleware/verifyToken.js";
import { requireRole } from "../middleware/requireRole.js";

const router = express.Router();



// User Parking Routes
router.post("/user/parking/entry", verifyToken, requireRole("user"), handleParkingEntry);
router.post("/user/book-parking", verifyToken, requireRole("user"), bookParking);
// router.get("/user/booking-history", verifyToken, requireRole("user"), getBookingHistory);
// router.delete("/user/cancel-booking/:bookingId", verifyToken, requireRole("user"), cancelBooking);
// router.get("/user/active-bookings", verifyToken, requireRole("user"), getActiveBookings);
// router.get("/user/available-parking-lots", verifyToken, requireRole("user"), getAvailableParkingLots);
// router.get("/user/nearby-parking-lots", verifyToken, requireRole("user"), getNearbyParkingLots);
// router.post("/user/review-parking", verifyToken, requireRole("user"), reviewParking);
// router.get("/user/parking-details/:parkingId", verifyToken, requireRole("user"), getParkingDetails);
// router.get("/user/search-parking", verifyToken, requireRole("user"), searchParking);
// router.get("/user/parking-rates", verifyToken, requireRole("user"), getParkingRates);
// router.get("/user/parking-availability", verifyToken, requireRole("user"), checkParkingAvailability);
// router.get("/user/parking-lot-map/:parkingId", verifyToken, requireRole("user"), getParkingLotMap);



// Partner Parking Routes
router.post("/partner/parking/RFID-approval",verifyToken, requireRole("partner"), rfidApproval);
router.post("/partner/add-parking-lot", verifyToken, requireRole("partner"), addParkingLot);
// router.put("/partner/update-parking-lot/:lotId", verifyToken, requireRole("partner"), updateParkingLot);
// router.delete("/partner/delete-parking-lot/:lotId", verifyToken, requireRole("partner"), deleteParkingLot);



export default router;  