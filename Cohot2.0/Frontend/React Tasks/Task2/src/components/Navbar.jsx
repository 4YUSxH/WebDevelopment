function Navbar() {
  return (
    <div className="navcontainer">
      <div className="logo">
        <h1>Horizon Courts</h1>
      </div>
      <div className="mid">
        <ul>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Coaches</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="booknow">Book Now <i class="ri-arrow-right-up-long-line"></i></div>
    </div>
  );
}

export default Navbar;
