import React, { useEffect, useState } from "react";

const RandomUser = () => {
  let max, min, user;
  const [randomUser, setRandomUser] = useState();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await fetch("http://localhost:5000/users/")
        .then((response) => response.json())
        .then((data) => setUsers(data));
    }
    fetchData();
  }, []);
  if (users.length >= 1) {
    max = users[0].id;
    min = users[0].id;
  }
  if (max && min) {
    for (user of users) {
      if (user.id > max) {
        max = user.id;
      }
      if (user.id < min) {
        min = user.id;
      }
    }
  }

  const randomId = Math.floor(Math.random() * (max - min + 1)) + min;
  useEffect(() => {
    if (randomId) {
      fetch(`http://localhost:5000/users/random/${randomId}`)
        .then((response) => response.json())
        .then((data) => setRandomUser(data));
    }
  }, [randomId]);

  console.log(randomId, randomUser);

  return (
    <div>
      <p>{randomUser?.id}</p>
    </div>
  );
};

export default RandomUser;
