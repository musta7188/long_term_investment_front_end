import styled from "styled-components";
import React from "react";

export const StockPercentage = styled.div`
  justify-self: right;
  margin: 2px;
  color: green;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 20px;
`;

export const StockSymbol = styled.div`
  justify-self: left;
  font-size: 30px;

`;

export const StockHeaderGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: black;
  
`;

export const MyPriceSign = styled.div`
  padding-top: 20px;
  justify-self: left;
  font-size: 20px;

`;

export const MyPriceValue = styled(MyPriceSign)`
  justify-self: right;
  font-size: 20px;
  padding-left: 10px;
`;

export const StockPercentageRed = styled(StockPercentage)`
  color: red;
`;




export const BuyInfoButton = styled.button`
background: blue;
margin-top:15px;
color: white;
font-size: 15px;

`

export const NewsButton = styled(BuyInfoButton)`
width: 80px;
text-align: center;
`








export const PercentageColor = (percentage) => {

  return percentage < 0 ? (
    <StockPercentageRed>
    <strong> {percentage}</strong> 
      {"%"}{" "}
    </StockPercentageRed>
  ) : (
    <StockPercentage>
     <strong>{percentage}</strong> 
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