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
    console.log(e.target);
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
