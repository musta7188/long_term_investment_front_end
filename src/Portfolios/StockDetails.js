import React from "react";
import {
  StocksGrid,
  SymbolDiv,
  InfoDiv,
  PriceDiv,
  ButtonDetails,
  DeleteButton,
  
} from "../styles/StockDetailsStyles";
import { Link } from "react-router-dom";

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
       <Link style={{ color: "white", textDecoration: "none" }} to={`/chart/${symbol}/${open}`}><ButtonDetails>Chart</ButtonDetails></Link> 
      <Link to={`/news/${symbol}`}><ButtonDetails>News</ButtonDetails></Link>  
      <DeleteButton onClick={() => DeleteSelectedStock(id)}>Delete</DeleteButton>

      </StocksGrid>
    </>
  );
}
