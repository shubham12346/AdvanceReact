import React from "react";
import CurrentUserLoader from "./CurrentUserLoader";
import UserInfo from "./UserInfo";
import UserWithIdLoader from "./UserWithIdLoader";
import ResourceLoader from "./ResourceLoader";
import DataSource from "./DataSource";
import DataSourceWithLocalStorage from "./DataSourceWithLocalStorage";

const ContainerComponent = () => {
  const getDataFromServer = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  const getDataFromLocalStorag = (key) => {
    return "Data from local storage";
    // return localStorage.getItem(key)
  };

  const Greeting = ({ msg }) => <h1>{msg}</h1>;

  return (
    <div>
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
      <UserWithIdLoader userId={4}>
        <UserInfo />
      </UserWithIdLoader>
      <ResourceLoader
        resourceName={"user"}
        resourceUrl={"https://jsonplaceholder.typicode.com/users/1"}
      >
        <UserInfo />
      </ResourceLoader>

      <DataSource
        getData={() =>
          getDataFromServer("https://jsonplaceholder.typicode.com/users/8")
        }
        render={(resource) => <UserInfo user={resource} />}
      ></DataSource>

      <DataSourceWithLocalStorage
        getData={() => getDataFromLocalStorag("")}
        resourceName={"msg"}
      >
        <Greeting />
      </DataSourceWithLocalStorage>
    </div>
  );
};

export default ContainerComponent;
