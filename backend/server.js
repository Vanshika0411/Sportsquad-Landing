const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Booking model
const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sport: { type: String, required: true },
  date: { type: String, required: true },
});
const Booking = mongoose.model("Booking", bookingSchema);

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// POST API for booking
app.post("/api/bookings", async (req, res) => {
  try {
    const { name, sport, date } = req.body;
    const newBooking = new Booking({ name, sport, date });
    await newBooking.save();
    res.status(201).json({ message: "🎉 Booking Confirmed Successfully!" });
  } catch (err) {
    res.status(500).json({ message: "❌ Error saving booking." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
