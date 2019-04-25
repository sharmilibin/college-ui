import React, { useState } from 'react';
import { makePostRequest } from '../utilities/ApiHelpers';
const base64 = require('base-64');

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
    let auth = 'Basic ' + base64.encode(values.userId + ':' + values.password);

    makePostRequest('http://localhost:3001/login', values, auth).then(
      response => {
        console.log(response);
      }
    );
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={values.userId || ''}
        onChange={handleChange}
        placeholder='Enter your User ID'
        type='text'
        name='userId'
        required
      />
      <input
        value={values.password || ''}
        onChange={handleChange}
        placeholder='Password'
        type='password'
        name='password'
        required
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default Login;
