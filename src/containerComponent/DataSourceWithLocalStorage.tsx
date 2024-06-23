import React, { useEffect, useState } from "react";

const DataSourceWithLocalStorage = ({ getData, resourceName, children }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    setUserData();
  }, [getData]);

  const setUserData = async () => {
    const response = await getData();
    setResource(response);
  };
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: resource });
        }

        return child;
      })}
    </>
  );
};

export default DataSourceWithLocalStorage;
