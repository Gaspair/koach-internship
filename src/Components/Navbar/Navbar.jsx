import React from "react";
import "./Navbar.css";

function Navbar({ fetchDataHandler }) {
  const handleClick = () => {
    fetchDataHandler();
  };
  return (
    <nav>
      <h1>Brand Name</h1>
      <button className="button" onClick={handleClick}>
        Get Users
      </button>
    </nav>
  );
}

export default Navbar;
