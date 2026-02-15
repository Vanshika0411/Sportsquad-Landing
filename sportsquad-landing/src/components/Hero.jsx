function Hero() {
  const scrollToBooking = () => {
    document.getElementById("booking").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <p className="hero-tag">🏟 India's #1 Stadium Booking Platform</p>

        <h1>
          Book Your <span>Dream Stadium</span>
          <br />
          Anytime, Anywhere
        </h1>

        <p className="hero-subtext">
          Seamlessly reserve cricket grounds, football arenas and more —
          in just a few clicks.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn" onClick={scrollToBooking}>
            Book Now
          </button>

          <button
            className="secondary-btn"
            onClick={() =>
              document
                .getElementById("features")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Features
          </button>
        </div>

      </div>

      {/* Decorative Blur Circle */}
      <div className="hero-circle"></div>

    </section>
  );
}

export default Hero;
