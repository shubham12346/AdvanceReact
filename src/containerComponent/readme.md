# Documentation: Container Components in React

## Overview

Container components in React are responsible for managing state and handling data fetching, while presenting components focus on displaying this data. This pattern helps to keep components modular and maintainable. Here, we document five different container components along with their usage and advantages.

### 1. CurrentUserLoader

#### Implementation

```
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
```

#### Usage

```jsx
<CurrentUserLoader>
  <UserInfo />
</CurrentUserLoader>
```

#### Advantages

- **Simplifies Data Fetching**: Encapsulates the data fetching logic for current user information.
- **Reusability**: Can be reused across different parts of the application to fetch the current user's data.
- **Separation of Concerns**: Keeps the data fetching logic separate from the presentation logic.

### 2. UserWithIdLoader

#### Implementation

```jsx
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
```

#### Usage

```jsx
<UserWithIdLoader userId={4}>
  <UserInfo />
</UserWithIdLoader>
```

#### Advantages

- **Dynamic Data Fetching**: Fetches data based on the provided user ID.
- **Flexibility**: Can be used to fetch data for any user by changing the `userId` prop.
- **Separation of Concerns**: Keeps the data fetching logic separate from the presentation logic.

### 3. ResourceLoader

#### Implementation

```jsx
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
```

#### Usage

```jsx
<ResourceLoader
  resourceName={"user"}
  resourceUrl={"https://jsonplaceholder.typicode.com/users/1"}
>
  <UserInfo />
</ResourceLoader>
```

#### Advantages

- **Generic Resource Loading**: Can be used to load any resource by specifying the URL and resource name.
- **Reusability**: Highly reusable for different resources and endpoints.
- **Separation of Concerns**: Keeps the data fetching logic separate from the presentation logic.

### 4. DataSource

#### Implementation

```jsx
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

const getDataFromServer = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
```

#### Usage

```jsx
<DataSource
  getData={() =>
    getDataFromServer("https://jsonplaceholder.typicode.com/users/8")
  }
  render={(resource) => <UserInfo user={resource} />}
/>
```

#### Advantages

- **Flexible Data Fetching**: Fetches data using a provided function.
- **Custom Render Logic**: Allows custom rendering of the fetched data.
- **Separation of Concerns**: Keeps the data fetching logic separate from the presentation logic.

### 5. DataSourceWithLocalStorage

#### Implementation

```jsx
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

const getDataFromLocalStorag = (key) => {
  return "Data from local storage";
  // return localStorage.getItem(key)
};

const Greeting = ({ msg }) => <h1>{msg}</h1>;
```

#### Usage

```jsx
<DataSourceWithLocalStorage
  getData={() => getDataFromLocalStorag("")}
  resourceName={"msg"}
>
  <Greeting />
</DataSourceWithLocalStorage>
```

#### Advantages

- **Local Storage Data Fetching**: Fetches data from local storage.
- **Offline Support**: Can be used to fetch data when offline.
- **Separation of Concerns**: Keeps the data fetching logic separate from the presentation logic.

---

These container components showcase various patterns for handling data fetching and state management in React applications, promoting separation of concerns and reusability.
