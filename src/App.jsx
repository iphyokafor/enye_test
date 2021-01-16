import React, { useState, useEffect } from "react";
import Header from "./Components/Header_footer/Header";
import Card from "./Components/Card";
import Pagination from "./Components/Pagination";
import axios from "axios";

const App = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(20);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await axios.get("https://api.enye.tech/v1/challenge/records");
      console.log("res", res);
      console.log("res", res.data.records.profiles);
      setUserInfo(res.data.records.profiles);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsersInfo = userInfo.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-gray-100">
      <Header />
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={userInfo.length}
        paginate={paginate}
      />
      <Card userInfo={currentUsersInfo} loading={loading} />
    </div>
  );
};

export default App;
