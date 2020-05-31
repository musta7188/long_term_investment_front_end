
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
  return currentSelected === value ? (
    <Link style={{ textDecoration: "none" }} to={`/${value}`}>
      {" "}
      <ActiveButton>
        <strong>{value}</strong>
      </ActiveButton>
    </Link>
  ) : value === "News" ? (
    <Link
      to={`/${value}/^FTSE`}
      style={{ textDecoration: "none" }}
      onClick={() => setCurrentSelected(value)}
    >
      {" "}
      <ControlButtonElem onClick={handleClose} inputColor={inputColor} >{value}</ControlButtonElem>
    </Link>
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

