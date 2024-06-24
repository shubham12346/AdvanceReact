Here's a brief documentation of each component provided, along with the advantages of using controlled and uncontrolled components in real scenarios:

### 1. UncontrolledForm Component

```jsx
import React from "react";

const UncontrolledForm = () => {
  const nameInputRef = React.createRef();
  const ageInputRef = React.createRef();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(nameInputRef.current.value, ageInputRef.current.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="name"
        id=""
        placeholder="Name"
        ref={nameInputRef}
      />
      <input type="text" name="age" id="" placeholder="Age" ref={ageInputRef} />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default UncontrolledForm;
```

**Description:**
This component is an example of an uncontrolled form. The input values are accessed using `React.createRef` and are only retrieved when the form is submitted.

**Advantages:**

- Simpler to implement for basic use cases.
- Less code and less state management required.

### 2. ControlledForm Component

```jsx
import { useState, useEffect } from "react";

const ControlledForm = () => {
  const [error, setError] = useState("");
  const [formdata, setFormData] = useState({
    name: "",
    age: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("formdata", formdata);
  };
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (formdata.name.length < 1) {
      setError("Name cannot be Empty");
    } else {
      setError("");
    }
  }, [formdata.name]);

  return (
    <>
      {error && <p> {error}</p>}
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          id=""
          placeholder="Name"
          value={formdata.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="age"
          id=""
          placeholder="Age"
          value={formdata.age}
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default ControlledForm;
```

**Description:**
This component is an example of a controlled form. The input values are managed by React state and can be validated or manipulated in real-time.

**Advantages:**

- Greater control over form inputs.
- Easier to implement validation and dynamic behavior.
- State can be used to manage errors and feedback.

### 3. ControlledModal Component

```jsx
import React from "react";
import styled from "styled-components";

const ControlledModal = ({ shouldDisplay, onClose, children }) => {
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
      {shouldDisplay && (
        <ModalBackground
          onClick={() => {
            onClose();
          }}
        >
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <button onClick={onClose}>Hide </button>
            {children}
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
};

export default ControlledModal;
```

**Description:**
This component is a controlled modal, meaning its visibility is managed by an external state.

**Advantages:**

- Can be easily controlled from outside the component.
- Useful for showing or hiding modal based on various conditions.
- Flexibility to manage modal state from parent components.

Sure! Here are examples of how the `UncontrolledFlow` and `ControlledFlow` components are used, along with the corresponding explanations.

### 4. UncontrolledFlow Component Usage

**Component Code:**

```jsx
import React, { useState } from "react";

const UncontrolledFlow = ({ children, onDone }) => {
  const [data, setData] = useState({});
  const [currentStepIndex, setCurrentIndex] = useState(0);

  const goNext = (dataFromStep) => {
    const nextStepIndex = currentStepIndex + 1;
    const newData = { ...data, ...dataFromStep };

    if (nextStepIndex < children.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      onDone(newData);
    }
    setData(newData);
  };

  const currentChild = React.Children.toArray(children)[currentStepIndex];
  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goNext });
  }

  return currentChild;
};

export default UncontrolledFlow;
```

**Usage Example:**

```jsx
import React from "react";
import UncontrolledFlow from "./UncontrolledFlow";

const StepOne = ({ goNext }) => {
  return (
    <>
      <h1>Step #1 Enter your Name </h1>
      <button onClick={() => goNext({ name: "John Doe" })}>Next</button>
    </>
  );
};

const StepTwo = ({ goNext }) => {
  return (
    <>
      <h1>Step #2 Enter your Age </h1>
      <button onClick={() => goNext({ age: 25 })}>Next</button>
    </>
  );
};

const StepThree = ({ goNext }) => {
  return (
    <>
      <h1>Step #3 Enter your Country </h1>
      <button onClick={() => goNext({ country: "USA" })}>Next</button>
    </>
  );
};

const App = () => {
  return (
    <UncontrolledFlow
      onDone={(data) => {
        console.log("All steps completed:", data);
        alert("All steps completed!");
      }}
    >
      <StepOne />
      <StepTwo />
      <StepThree />
    </UncontrolledFlow>
  );
};

export default App;
```

**Explanation:**

- The `UncontrolledFlow` component manages the state and progression of steps internally.
- Each step component (`StepOne`, `StepTwo`, `StepThree`) receives a `goNext` function to proceed to the next step.
- The parent component (`App`) only gets the final data once all steps are completed via the `onDone` callback.

### 5. ControlledFlow Component Usage

**Component Code:**

```jsx
import React from "react";

const ControlledFlow = ({ children, onDone, currentIndex, onNext }) => {
  const currentChild = React.Children.toArray(children)[currentIndex];
  const goNext = (dataFromStep) => {
    onNext(dataFromStep);
  };
  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goNext });
  }

  return currentChild;
};

export default ControlledFlow;
```

**Usage Example:**

```jsx
import React, { useState } from "react";
import ControlledFlow from "./ControlledFlow";

const StepOne = ({ goNext }) => {
  return (
    <>
      <h1>Step #1 Enter your Name </h1>
      <button onClick={() => goNext({ name: "John Doe" })}>Next</button>
    </>
  );
};

const StepTwo = ({ goNext }) => {
  return (
    <>
      <h1>Step #2 Enter your Age </h1>
      <button onClick={() => goNext({ age: 25 })}>Next</button>
    </>
  );
};

const StepThree = ({ goNext }) => {
  return (
    <>
      <h1>Step #3 Enter your Country </h1>
      <button onClick={() => goNext({ country: "USA" })}>Next</button>
    </>
  );
};

const App = () => {
  const [data, setData] = useState({});
  const [currentStepIndex, setCurrentIndex] = useState(0);

  const changeNext = (dataFromStep) => {
    setData({ ...data, ...dataFromStep });
    setCurrentIndex(currentStepIndex + 1);
  };

  return (
    <ControlledFlow currentIndex={currentStepIndex} onNext={changeNext}>
      <StepOne />
      <StepTwo />
      {data.age > 20 && <StepThree />}
    </ControlledFlow>
  );
};

export default App;
```

**Explanation:**

- The `ControlledFlow` component receives the current step index and a callback to handle moving to the next step.
- Each step component (`StepOne`, `StepTwo`, `StepThree`) receives a `goNext` function to pass data to the parent component.
- The parent component (`App`) maintains control over the current step and can conditionally render steps based on the collected data.
- In this example, `StepThree` is only rendered if the `age` is greater than 20.

**Advantages in Real Scenarios:**

- **UncontrolledFlow:** Encapsulates step logic, making it easier to manage simple multi-step processes without exposing internal states to the parent.
- **ControlledFlow:** Provides flexibility to control step progression and render conditional steps based on the collected data, making it suitable for more complex workflows that require dynamic behavior based on user input.
