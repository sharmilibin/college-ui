import React, { useState } from "react";
import { makePostRequest } from "../utilities/ApiHelpers";

export const SignUp = () => {
  const [values, setValues] = useState({});

  const handleChange = event => {
    event.persist();

    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };
  const handleSubmit = e => {
    console.log(values);
    makePostRequest("/api/auth/signup", values).then(response => {
      console.log("Print Response===>", response.data);
      console.log("Print Header ==>", response.headers);
    });

    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={values.username || ""}
        onChange={handleChange}
        placeholder="Username"
        type="text"
        name="username"
        required
      />
      <input
        value={values.email || ""}
        onChange={handleChange}
        placeholder="email"
        type="text"
        name="email"
        required
      />
      <input
        value={values.password || ""}
        onChange={handleChange}
        placeholder="password"
        type="password"
        name="password"
        required
      />
      <input
        value={values.role || ""}
        onChange={handleChange}
        placeholder="role"
        type="text"
        name="role"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUp;
