import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Route } from "react-router-dom";


export default function index() {
  return (
    ////set the route to sing in and sign up
    <div>
      <Route exact path={"/"} render={(props) => <SignIn {...props} />} />
      <Route exact path={"/Sign-Up"} render={(props) => <SignUp {...props} />} />
    </div>
  );
}
