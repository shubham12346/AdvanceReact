import React, { useEffect, useState } from "react";

const UserWithIdLoader = ({ userId, children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    setUserData();
  }, [userId]);

  const setUserData = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const data = await response.json();
    console.log("data", data);
    setUser(data);
  };

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }

        return child;
      })}
    </>
  );
};

export default UserWithIdLoader;
