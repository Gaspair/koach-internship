import "./UserCardGrid.css";

const UserCardGrid = ({ userData }) => {
  return (
    <div className="grid-container">
      {userData.map((user) => (
        <div className="user-card" key={user.id}>
          <img src={user.avatar} alt="Avatar" />
          <h2>{`${user.first_name} ${user.last_name}`}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserCardGrid;
