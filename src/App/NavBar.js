import React, { Component } from 'react'
import styled, { css } from "styled-components";



const Bar = styled.div`
  display: grid;
  margin-bottom: 40px;
  grid-template-columns: 180px auto 100px 100px;
  background-color: black;
  color: white;
`;

const Logo = styled.div`
  font-size: 1.5em;
`;

const ControlButtonElem = styled.div`
  padding: 20px;
  cursor: pointer;
  text-shadow: 0px 0px 60px #03ff03;
 
`;


export default class NavBar extends Component {
  render() {
    return (
      <Bar>
       <Logo>Long Term Investment</Logo>
       <ControlButtonElem>Recommendation</ControlButtonElem>
       <ControlButtonElem>Portfolio</ControlButtonElem>
       <ControlButtonElem>Search</ControlButtonElem>
      </Bar>
    )
  }
}
