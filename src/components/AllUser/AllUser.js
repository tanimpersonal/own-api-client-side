import React, { useState } from "react";

const AllUser = () => {
  const [users, setUser] = useState([]);

  fetch("http://localhost:5000/users")
    .then((response) => response.json())
    .then((data) => setUser(data));

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.contact}</p>
          <img width="100px" src={user.photoUrl} alt="" />
          <div className="btn">
            <button>Delete</button>
            <button>Update</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllUser;
