import React, { useState } from "react";
import Login from "./login/LoginComponent";
import SignUp from "./login/SignUpComponent";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
        </ul>

        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </div>
    </Router>
  );
};

export default App;
