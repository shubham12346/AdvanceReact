import React from "react";
// because we cannot directly access state the values of the inputs from outside
// this is called an uncontrolled form

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
