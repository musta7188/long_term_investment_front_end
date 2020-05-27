import styled from "styled-components";
export const SearchStockCardStyled = styled.div`
  display: grid;
  border: solid 1px gold;
  grid-template-columns: 1fr 1fr;
  padding: 10px;
  background: #000080;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 2px 5px green;
  }
`;
export const TagDiv = styled.div`
  margin: 5px;
  color: white;
`;
export const InfoDiv = styled.div`
  margin: 5px;
  color: gold;
`;

export const StockContainer = styled.div`
  margin-top: 30px;
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;
