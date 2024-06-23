import React, { useEffect, useState } from "react";

const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    setUserData();
  }, []);

  const setUserData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log("data", data);
    setUser(data[0]);
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

export default CurrentUserLoader;
