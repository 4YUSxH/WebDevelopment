import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/courses">Courses</Link> */}

      {/* NavLinks are upgraded from of link and we can write custom css using style={} attribute */}
      <NavLink style={({isActive}) => ({color : isActive ? "red" : "antiquewhite"})} to="/">
        Home
      </NavLink>
      <NavLink style={({isActive}) => ({color : isActive ? "red" : "antiquewhite"})} to="/about">About</NavLink>
      <NavLink style={({isActive}) => ({color : isActive ? "red" : "antiquewhite"})} to="/courses">Courses</NavLink>
    </div>
  );
};

export default Navbar;
