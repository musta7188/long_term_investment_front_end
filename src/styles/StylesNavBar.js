import styled, { css } from "styled-components";
export const Bar = styled.div`
  display: grid;
  margin-bottom: 40px;
  grid-template-columns: 180px auto 100px 100px;
  background-color: black;
  color: white;
`;

export const Logo = styled.div`
  font-size: 1.5em;
`;

export const ControlButtonElem = styled.div`
  padding: 20px;
  cursor: pointer;
  text-shadow: 0px 0px 60px #03ff03;
`;
