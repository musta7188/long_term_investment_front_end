import styled from "styled-components";
import React from "react";

export const StockPercentage = styled.div`
  justify-self: right;

  margin: 2px;
  color: green;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const StockSymbol = styled.div`
  justify-self: left;
  font-size: 20px;
`;

export const StockHeaderGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const MyPriceSign = styled.div`
  padding-top: 20px;
  justify-self: left;
  font-size: 10px;
`;

export const MyPriceValue = styled(MyPriceSign)`
  justify-self: right;
  font-size: 10px;
`;

export const StockPercentageRed = styled(StockPercentage)`
  color: red;
`;

export const PercentageColor = (percentage) => {
  debugger
  return percentage < 0 ? (
    <StockPercentageRed>
      {percentage}
      {"%"}{" "}
    </StockPercentageRed>
  ) : (
    <StockPercentage>
      {percentage}
      {"%"}
    </StockPercentage>
  );
};

export const calculatePercentageReturn = (currentPrice, boughtPrice) => {
  let minusReturn = currentPrice - boughtPrice;
  let divideReturn = minusReturn / boughtPrice;
  let finalResults = divideReturn * 100;

  return finalResults.toString().slice(0, 5);
};