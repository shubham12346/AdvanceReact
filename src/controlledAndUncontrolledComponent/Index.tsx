import React, { useState } from "react";
import UncontrolledForm from "./UncontrolledForm";
import ControlledForm from "./ControlledForm";
import ControlledModal from "./ControlledModa";
import UncontrolledFlow from "./UncontrolledFlow";
import ControlledFlow from "./ControlledFlow";

const Index = () => {
  const [shouldDisplay, setShouldDisplay] = useState(false);

  const [data, setData] = useState({});
  const [currentStepIndex, setCurrentIndex] = useState(0);

  const changeNext = (dataFromStep) => {
    setData({ ...data, ...dataFromStep });
    setCurrentIndex(currentStepIndex + 1);
  };

  const StepOne = ({ goNext }) => {
    return (
      <>
        <h1>Step #1 Enter your Name </h1>
        <button
          onClick={() => {
            goNext({ name: "my name" });
          }}
        >
          Next
        </button>
      </>
    );
  };
  const StepTwo = ({ goNext }) => {
    return (
      <>
        <h1>Step #2 My age </h1>
        <button
          onClick={() => {
            goNext({ age: "25" });
          }}
        >
          Next
        </button>
      </>
    );
  };
  const StepThree = ({ goNext }) => {
    return (
      <>
        <h1>Step #3 Enter you country</h1>
        <button
          onClick={() => {
            goNext({ country: "my country" });
          }}
        >
          Next
        </button>
      </>
    );
  };
  console.log("data", data);
  return (
    <div>
      <button onClick={() => setShouldDisplay(!shouldDisplay)}>
        {shouldDisplay ? "Hide Modal" : "Show Modal"}{" "}
      </button>
      {/* 1. Uncontrolled form  component 
        // because we cannot directly access state the values of the inputs from outside
// this is called an uncontrolled form */}
      {/* <UncontrolledForm /> */}
      {/* 2. controlled component 
      1. In controlled component we  can use state of the field 
        to show error and many more operations as we need to perform  */}
      {/* <ControlledForm /> */}
      {/* 3. Controlled Modal  */}
      {/* // We can control from outside when to open and close modal this 
       is the advantage of controlled modal , I can control the state with the help of button outside   */}
      {/* <ControlledModal
        shouldDisplay={shouldDisplay}
        onClose={() => setShouldDisplay(false)}
      >
        <p>I am the content in the modal</p>
    
      </ControlledModal> */}

      {/* 4 .  UnControlled  flows  */}
      {/* // As every ting is controlled inside the uncontrollled component ,the app compoent has no access to to it 
       it is called an uncontrolled component 
       This is uncontrolled because we have no access to data untill it reaches to step 3 , 
       */}
      {/* <UncontrolledFlow
        onDone={(data) => {
          console.log("data", data);
          alert("Yaee, you completed it ");
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledFlow> */}

      {/* 5. Controlled Flows  */}
      {/* // suppose i don't want to show step 3 if age is less than 20 i can do that now as 
      in this flow i have access to data outside the controll flow component */}
      <ControlledFlow currentIndex={currentStepIndex} onNext={changeNext}>
        <StepOne />
        <StepTwo />
        {data?.age > 20 && <StepThree />}
      </ControlledFlow>
    </div>
  );
};

export default Index;
