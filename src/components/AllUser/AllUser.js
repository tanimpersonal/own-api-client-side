import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllUser = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/user/all")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.contact}</p>
          <img width="100px" src={user.photoUrl} alt="" />
          <div className="btn">
            <button>Delete</button>
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
