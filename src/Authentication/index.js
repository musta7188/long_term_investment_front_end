import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Route } from "react-router-dom";


export default function index() {
  return (
    <div>
      <Route exact path={"/"} render={(props) => <SignIn {...props} />} />
      <Route exact path={"/Sign-Up"} render={(props) => <SignUp {...props} />} />
    </div>
  );
}
