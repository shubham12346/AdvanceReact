# Layot Component Documentation

## 1. Screen Splitter

### Overview

The Screen Splitter component allows you to split the screen into two resizable panels. It provides flexibility in defining the width of each panel and encapsulates the logic for rendering the components within these panels. There are two approaches to implement the Screen Splitter: passing components as props and passing components as children.

### Usage

#### Example 1: Passing Components as Props (Not Recommended)

This approach is less scalable and can make the code harder to read and maintain.

```jsx
const LeftSidePanel = ({ title }) => {
  return <h2 style={{ backgroundColor: "crimson" }}>{title}</h2>;
};

const RightSidePanel = ({ title }) => {
  return <h2 style={{ backgroundColor: "burlywood" }}>{title}</h2>;
};

function App() {
  return (
    <SplitScreen
      Left={LeftSidePanel}
      leftWidth={1}
      Right={RightSidePanel}
      rightWidth={3}
    />
  );
}

export default App;
```

#### Example 2: Passing Components as Children (Recommended)

This approach is cleaner and more maintainable, making it easier to manage and extend the component.

```jsx
const LeftSidePanel = ({ title }) => {
  return <h2 style={{ backgroundColor: "crimson" }}>{title}</h2>;
};

const RightSidePanel = ({ title }) => {
  return <h2 style={{ backgroundColor: "burlywood" }}>{title}</h2>;
};

function App() {
  return (
    <SplitScreen leftWidth={1} rightWidth={3}>
      <LeftSidePanel title={"Left"} />
      <RightSidePanel title={"Right"} />
    </SplitScreen>
  );
}

export default App;
```

### Advantages

- **Scalability**: Passing components as children makes the component more flexible and easier to scale.
- **Readability**: The code is cleaner and more readable, as it clearly shows the structure of the components.
- **Maintainability**: Easier to maintain and update the components without modifying the SplitScreen component itself.

### Use Case

Use the Screen Splitter when you need to create a layout with two resizable panels, such as a sidebar and main content area, and you want to maintain a clean and maintainable codebase.

## 2. Generic List Component

### Overview

The Generic List component allows you to render a list of items using a specified item component. It abstracts the logic of iterating over the items and passing each item to the item component.

### Usage

#### Example: Regular List Usage

```jsx
import React from "react";
import RegularList from "./RegularList";
import { LargeBookListItem } from "./LargeBookListItem";

const books = [
  { name: "Book 1", price: "$10", title: "Title 1", pages: 100 },
  { name: "Book 2", price: "$15", title: "Title 2", pages: 150 },
];

function App() {
  return (
    <RegularList
      items={books}
      sourceName={"books"}
      ItemComponent={LargeBookListItem}
    />
  );
}

export default App;
```

### Component Code

```jsx
const RegularList = ({ items, sourceName, ItemComponent }) => {
  return (
    <>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [sourceName]: item }} />
      ))}
    </>
  );
};

export default RegularList;
```

### Item Component Example

```jsx
import React from "react";

export const LargeBookListItem = ({ books }) => {
  const { name, price, title, pages } = books;

  return (
    <>
      <h2>{name}</h2>
      <p>{price}</p>
      <h2>Title:</h2>
      <p>{title}</p>
      <p># of Pages: {pages}</p>
    </>
  );
};
```

### Advantages

- **Reusability**: The component can be reused with any type of list and item component.
- **Abstraction**: Abstracts the logic of rendering a list, making the code more concise and readable.
- **Flexibility**: Allows for easy customization of the list item rendering by passing different item components.

### Use Case

Use the Generic List component when you need to render a list of items and want to abstract the rendering logic for better code reuse and maintainability.

## 3. Generic Modal Component

### Overview

The Generic Modal component allows you to display a modal with any content. It encapsulates the logic for showing and hiding the modal and can be reused with different types of content.

### Usage

#### Modal Code

```jsx
import React, { useState } from "react";
import styled from "styled-components";

const Modal = ({ children }) => {
  const [show, setShow] = useState(false);

  const ModalBackground = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
  `;

  const ModalContent = styled.div`
    margin: 12% auto;
    padding: 24px;
    background-color: white;
    width: 50%;
  `;

  return (
    <>
      <button onClick={() => setShow(true)}>Show Modal</button>
      {show && (
        <ModalBackground
          onClick={() => {
            setShow(false);
          }}
        >
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShow(false)}>Hide Modal</button>
            {children}
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
};

export default Modal;
```

#### Example: Modal Usage

```jsx
import React from "react";
import Modal from "./Modal";
import { LargeBookListItem } from "./LargeBookListItem";

const books = [
  { name: "Book 1", price: "$10", title: "Title 1", pages: 100 },
  { name: "Book 2", price: "$15", title: "Title 2", pages: 150 },
];

function App() {
  return (
    <Modal>
      <LargeBookListItem books={books[0]} />
    </Modal>
  );
}

export default App;
```

### Advantages

- **Reusability**: The modal component can be reused with any content, making it highly flexible.
- **Encapsulation**: Encapsulates the logic for showing and hiding the modal, simplifying the code.
- **Customization**: Allows for easy customization of the modal content by passing different children.

### Use Case

Use the Generic Modal component when you need to display modal dialogs with different content and want to maintain a consistent modal behavior across the application.
