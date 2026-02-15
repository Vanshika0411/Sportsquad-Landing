import { useState } from "react";

function BookingForm() {
  const [name, setName] = useState("");
  const [sport, setSport] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !sport || !date) {
      setMessage("⚠ Please fill all fields properly.");
      return;
    }

    try {
      // Backend API call
      const res = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, sport, date }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(data.message); // 🎉 Booking Confirmed Successfully!
        setName("");
        setSport("");
        setDate("");
      } else {
        setMessage(data.message || "❌ Something went wrong!");
      }
    } catch (err) {
      setMessage("⚠ Server Error. Try again later.");
      console.error(err);
    }
  };

  return (
    <section className="booking-section" id="booking">
      <div className="booking-container">

        <div className="booking-left">
          <h2>Reserve Your Stadium Slot</h2>
          <p>
            Choose your sport, pick a date and secure your arena instantly.
            Fast. Simple. Reliable.
          </p>
        </div>

        <div className="booking-card">
          <form onSubmit={handleSubmit} className="booking-form">

            <div className="input-group">
              <label>Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label>Select Sport</label>
              <select
                value={sport}
                onChange={(e) => setSport(e.target.value)}
                required
              >
                <option value="">Choose Sport</option>
                <option>Cricket</option>
                <option>Football</option>
                <option>Badminton</option>
              </select>
            </div>

            <div className="input-group">
              <label>Select Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="booking-btn">
              Confirm Booking
            </button>

          </form>

          {message && <p className="form-message">{message}</p>}
        </div>

      </div>
    </section>
  );
}

export default BookingForm;
