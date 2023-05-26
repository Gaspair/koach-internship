import { useState } from "react";
import { Loader, Navbar, UserCardGrid } from "./Components/index";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchDataHandler = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://reqres.in/api/users?page=1`);
      const json = await response.json();
      setUserData(json.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar fetchDataHandler={fetchDataHandler} />
      <div className="card-container">
        {!isLoading ? <UserCardGrid userData={userData} /> : <Loader />}
      </div>
    </>
  );
};

export default App;
