import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import { Route } from "react-router-dom";
import styled from "styled-components";
export default function index() {

const Body =  styled.div`
background: red;

`
  return (

      <div>
       <Route path={"/Sign-in"} render={(props) => <SignIn {...props} />} />
       <Route path={"/Sign-Up"} render={(props) => <SignUp {...props} />} />
      </div>

    
  )
}
