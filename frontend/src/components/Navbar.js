import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    display: "flex",
    gap: "15px",
    padding: "10px",
    background: "#ddd",
    marginBottom: "20px"
  };

  return (
    <div style={navStyle}>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/jobs">Jobs</Link>
      <Link to="/post-job">Post Job</Link>
    </div>
  );
}

export default Navbar;
