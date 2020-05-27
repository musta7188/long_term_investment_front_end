import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Route } from "react-router-dom";


export default function index() {
  return (
    <div>
      <Route path={"/Sign-in"} render={(props) => <SignIn {...props} />} />
      <Route path={"/Sign-Up"} render={(props) => <SignUp {...props} />} />
    </div>
  );
}
