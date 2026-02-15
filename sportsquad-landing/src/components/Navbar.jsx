function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <div className="logo">
          <span>Sport</span>Squad
        </div>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#booking" className="nav-cta">Book Now</a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
