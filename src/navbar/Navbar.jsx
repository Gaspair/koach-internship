import React from "react";
import "./Navbar.css";

function Navbar(fetchData) {
  return (
    <nav>
      <h1>Brand Name</h1>
      <button className="fetch" onClick={fetchData}>
        Fetch user data
      </button>
    </nav>
  );
}

export default Navbar;
