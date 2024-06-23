import { useEffect, useState } from "react";

const DataSource = ({ getData, render }) => {
  const [resource, setResource] = useState(null);

  const setUserData = async () => {
    const response = await getData();
    setResource(response);
  };

  useEffect(() => {
    setUserData();
  }, [getData]);

  return render(resource);
};

export default DataSource;
