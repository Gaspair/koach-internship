import React, { useEffect, useState } from "react";
import "./userCardGrid.css";

const UserCardGrid = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("https://reqres.in/api/users?page=1");
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();

  if (!data) {
    return <div>Loading...</div>;
  }

  const { data: users } = data;

  return (
    <div>
      <div className="user-grid">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <img src={user.avatar} alt="Avatar" />
            <h2>{`${user.first_name} ${user.last_name}`}</h2>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCardGrid;
