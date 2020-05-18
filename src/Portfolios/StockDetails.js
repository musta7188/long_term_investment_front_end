import React from "react";
import {
  StocksGrid,
  SymbolDiv,
  InfoDiv,
  PriceDiv,
  ButtonDetails,
  DeleteButton,
} from "../styles/StockDetailsStyles";

export default function StockDetails(props) {
  const { symbol, open, units, DeleteSelectedStock, id } = props;

  return (
    <>
      <StocksGrid>
        <SymbolDiv>{symbol}</SymbolDiv>
        <div></div>
        <InfoDiv>Open:</InfoDiv>
        <PriceDiv>$ {open}</PriceDiv>
        <InfoDiv>Units:</InfoDiv>
        <PriceDiv>{units}</PriceDiv>
        <InfoDiv>Value:</InfoDiv>
        <PriceDiv>$ {units * open}</PriceDiv>
        <ButtonDetails>Chart</ButtonDetails>
        <ButtonDetails>News</ButtonDetails>
        <DeleteButton onClick={() => DeleteSelectedStock(id)}>Delete</DeleteButton>
        <ButtonDetails>Edit</ButtonDetails>
      </StocksGrid>
    </>
  );
}
