import { FaCalendarCheck, FaFutbol, FaBolt } from "react-icons/fa";

function Features() {
  return (
    <section className="features" id="features">
      <h2 className="features-title">Why Choose SportSquad?</h2>

      <div className="feature-container">

        <div className="feature-card">
          <div className="icon-wrapper">
            <FaCalendarCheck />
          </div>
          <h3>Instant Booking</h3>
          <p>
            Reserve your stadium slot in seconds with our fast and
            smooth booking system.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon-wrapper">
            <FaFutbol />
          </div>
          <h3>Multiple Sports</h3>
          <p>
            Cricket, Football, Badminton, Tennis and more —
            all in one place.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon-wrapper">
            <FaBolt />
          </div>
          <h3>Real-time Availability</h3>
          <p>
            Check live stadium availability before booking
            to avoid clashes.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Features;
