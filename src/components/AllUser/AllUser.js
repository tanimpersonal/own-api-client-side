import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllUser = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/user/all")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/user/delete/${id}`);
    await handleData();
  };
  const handleData = async () => {
    await axios
      .get("http://localhost:5000/user/all")
      .then((data) => setUser(data.data));
  };
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.contact}</p>
          <img width="100px" src={user.photoUrl} alt="" />
          <div className="btn">
            <button onClick={() => handleDelete(user.id)}>Delete</button>
            <Link to={`/update-user/${user.id}`}>
              <button>Update</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllUser;
