import styled, { css } from "styled-components";
export const Bar = styled.div`
  display: grid;
  margin-bottom: 40px;
  grid-template-columns: 180px auto 100px 100px;
  background-color: black;
  color: white;
 
`;

export const Logo = styled.div`
  padding: 5px;
  font-size: 1.5em;
  font-family: 'Anton', sans-serif;
  color: green;
`;

export const ControlButtonElem = styled.div`
  padding-top: 25px;
 color: white;
  text-shadow: 0px 0px 60px #03ff03;
  &:hover {
    color: green; 
    cursor: pointer;
  }
`;

export const ActiveButton = styled(ControlButtonElem)`
color: green;
`
