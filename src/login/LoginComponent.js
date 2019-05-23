import React, { useState } from "react";
import { makePostRequest, makeGetRequest } from "../utilities/ApiHelpers";
const base64 = require("base-64");

export const Login = () => {
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

    makePostRequest("/api/auth/signin", values).then(response => {
      console.log("Print Response===>", response.data);
      console.log("Print Header ==>", response.headers);
    });
    // makeGetRequest("/students/{studentID}", values).then(response => {
    //   console.log("print Get Respose ", response.data);
    // });

    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={values.usernameOrEmail || ""}
        onChange={handleChange}
        placeholder="username or email"
        type="text"
        name="usernameOrEmail"
        required
      />
      <input
        value={values.password || ""}
        onChange={handleChange}
        placeholder="Password"
        type="password"
        name="password"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
