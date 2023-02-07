import React, { useEffect, useState } from "react";

const RandomUser = () => {
  let max, min, user;
  const [randomUser, setRandomUser] = useState();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await fetch("http://localhost:5000/user/all")
        .then((response) => response.json())
        .then((data) => setUsers(data));
    }
    fetchData();
  }, []);
  if (users.length >= 1) {
    max = parseInt(users[0].id);
    min = parseInt(users[0].id);
  }
  if (max && min) {
    console.log(max);
    for (user of users) {
      if (parseInt(user.id) > max) {
        max = parseInt(user.id);
      }
      if (parseInt(user.id) < min) {
        min = parseInt(user.id);
      }
    }
  }

  const randomId = Math.floor(Math.random() * (max - min + 1)) + min;
  useEffect(() => {
    if (randomId) {
      fetch(`http://localhost:5000/user/random/${randomId}`)
        .then((response) => response.json())
        .then((data) => setRandomUser(data));
    }
  }, [randomId]);
  if (randomUser) {
    var { id, name, gender, contact, address, photoUrl } = randomUser;
  }
  console.log(randomId, randomUser);

  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
      <p>{gender}</p>
      <p>{contact}</p>
      <p>{address}</p>
      <img src={photoUrl} alt="" />
      <p></p>
    </div>
  );
};

export default RandomUser;
