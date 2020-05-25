import styled, { css } from "styled-components";
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
  color: green;
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
`;

export const ActiveButton = styled(ControlButtonElem)`
color: green;
`
