import React, { useEffect, useState } from "react";
import UserCardGrid from "./UserCard/UserCardGrid";
import Navbar from "./navbar/Navbar";

const YourComponent = () => {
  return (
    <>
      <Navbar />

      <div>
        <UserCardGrid />
      </div>
    </>
  );
};

export default YourComponent;
