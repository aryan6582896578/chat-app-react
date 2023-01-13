import React from "react";
import { Router, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </Router>
    </>
  );
};

export default Navbar;
