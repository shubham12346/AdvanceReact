import React from "react";

const UserInfo = ({ user }) => {
  if (!user) {
    return <h1>Loading...</h1>;
  }
  console.log("user", user);
  const { name, userName, phone } = user;
  return (
    <>
      <h2>{name}</h2>
      <h2>{userName}</h2>
      <p>Phone no : {phone}</p>
    </>
  );
};

export default UserInfo;
