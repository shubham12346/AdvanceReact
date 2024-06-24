import React, { useState } from "react";

const ControlledFlow = ({ children, onDone, currentIndex, onNext }) => {
  const currentChild = React.Children.toArray(children)[currentIndex];
  const goNext = (datafromStep) => {
    onNext(datafromStep);
  };
  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goNext });
  }

  return currentChild;
};

export default ControlledFlow;
