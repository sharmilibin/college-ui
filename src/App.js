import React, { useState } from "react";
import Login from "./login/LoginComponent";
import SignUp from "./login/SignUpComponent";
import SignIn from "./login/SignIn";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <div>
        <Route path="/signin" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={SignIn} />
        <Route path="/home" component={SignUp} />
      </div>
    </Router>
  );
};

export default App;
