import styled from "styled-components";
export const SelectedStockDiv = styled.div`
  display: grid;
  padding: 10px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
`;

export const InfoDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  padding: 10px;
  background: #000080;
`;

export const Detail = styled.h3`
  font-size: 15px;
`;

export const Value = styled.h4`
  font-size: 18px;
  justify-self: right;
`;
