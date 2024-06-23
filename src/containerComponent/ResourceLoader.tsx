import React, { useEffect, useState } from "react";

const ResourceLoader = ({ resourceUrl, resourceName, children }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    setUserData();
  }, [resourceUrl]);

  const setUserData = async () => {
    const response = await fetch(resourceUrl);
    const data = await response.json();
    setResource(data);
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

export default ResourceLoader;
