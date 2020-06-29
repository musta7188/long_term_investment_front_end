
import styled, { css } from "styled-components";
import React from 'react'
import { Link } from "react-router-dom";
export const Bar = styled.div`
  display: grid;
  margin-bottom: 40px;
  grid-template-columns: 1fr 1fr;
  background-color: black;
  color: white;

  grid-gap:10px;
 
`;

export const Logo = styled.div`
  padding: 5px;
  font-size: 1.5em;
  font-family: 'Anton', sans-serif;
  color: white;
  margin: 20px;
  
`;

export  const ButtonStyle = {
  color: "white",
  background: "black",
  fontSize: 20
};




export const ControlButtonElem = styled.div`
  padding-top: 25px;
  color: white;

  text-shadow: 0px 0px 60px #03ff03;
  &:hover {
    color: green; 
    cursor: pointer;
  }
  margin-top:20px;
  margin-bottom: 20px;
  color: ${props => props.inputColor || "black"};
`;

export const ActiveButton = styled(ControlButtonElem)`
color: green;
font-size: 20px;
`

export function MenuButton( {value, currentSelected, setCurrentSelected, inputColor, handleClose} ) {

  ///current selected is equal to the value of the current button/
  ////if it does he call the active button style which will turn in green the value 

  return currentSelected === value ? (
    <Link style={{ textDecoration: "none" }} to={`/${value}`}>
      {" "}
      <ActiveButton>
        <strong>{value}</strong>
      </ActiveButton>
    </Link>
    ////it check also if the value is equal to new bec news need two value to link the page to the button
  ) : value === "News" ? (
    <Link
      to={`/${value}/^FTSE`}
      style={{ textDecoration: "none" }}
      onClick={() => setCurrentSelected(value)}
    >
      {" "}
      <ControlButtonElem onClick={handleClose} inputColor={inputColor} >{value}</ControlButtonElem>
    </Link>
    ////if the current value is not equal to the value passed the style will be none and link activate for the right page 
  ) : (
    <Link
      to={`/${value}/`}
      style={{ textDecoration: "none" }}
      onClick={() => setCurrentSelected(value)}
    >
      {" "}
      <ControlButtonElem   onClick={handleClose} inputColor={inputColor} >{value}</ControlButtonElem>
    </Link>
  );
}

