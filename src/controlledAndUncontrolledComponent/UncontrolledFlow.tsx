import React, { useState } from "react";

const UncontrolledFlow = ({ children, onDone }) => {
  const [data, setData] = useState({});
  const [currentStepIndex, setCurrentIndex] = useState(0);

  const goNext = (dataFromStep) => {
    const nextStepIndex = currentStepIndex + 1;

    const newData = {
      ...data,
      ...dataFromStep,
    };
    console.log(newData);
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
