
import styled, { css } from "styled-components";
import React from 'react'
import { Link } from "react-router-dom";
export const Bar = styled.div`
  display: grid;
  margin-bottom: 40px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  background-color: black;
  color: white;
  text-align: center;
  grid-gap:50px;
 
`;

export const Logo = styled.div`
  padding: 5px;
  font-size: 1.5em;
  font-family: 'Anton', sans-serif;
  color: white;
  margin-right:20px;
`;

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
`;

export const ActiveButton = styled(ControlButtonElem)`
color: green;
`

export function Button( {value, currentValue, setCurrentSelected} ) {
  return currentValue === value ? (
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
      <ControlButtonElem>{value}</ControlButtonElem>
    </Link>
  ) : (
    <Link
      to={`/${value}/`}
      style={{ textDecoration: "none" }}
      onClick={() => setCurrentSelected(value)}
    >
      {" "}
      <ControlButtonElem>{value}</ControlButtonElem>
    </Link>
  );
}
