import React from "react";
import {
  SearchStockCardStyled,
  TagDiv,
  InfoDiv,
} from "../styles/SearchedStockCardstyles";
import ModalAddStock from "./ModalAddStock";
import { AddPortfolioButton } from "../styles/CreateModalButtonStyles";


export default function SearchedStockCard(props) {
  const { name, symbol, type, marketOpen, marketClose, region } = props;
  ///extract from the props all the passed properties 
  return (
    <SearchStockCardStyled>
      <strong>
        <TagDiv>Symbol:</TagDiv>
      </strong>
      <InfoDiv>{symbol}</InfoDiv>
      <strong>
        <TagDiv>Name:</TagDiv>
      </strong>
      <InfoDiv>{name}</InfoDiv>
      <strong>
        <TagDiv>Type:</TagDiv>
      </strong>
      <InfoDiv>{type}</InfoDiv>
      <strong>
        <TagDiv>Market Open:</TagDiv>
      </strong>
      <InfoDiv>{marketOpen}</InfoDiv>
      <strong>
        <TagDiv>Market Close:</TagDiv>
      </strong>
      <InfoDiv>{marketClose}</InfoDiv>
      <strong>
        <TagDiv>Region:</TagDiv>
      </strong>
      <InfoDiv>{region}</InfoDiv>
      {/* modal that allow user to add the stock to the portfolios */}
      <ModalAddStock name={name} symbol={symbol} />
      {/* open in a different page news and chart  */}
      <a target="_blank" style={{ textDecoration: "none" }} href={`/News/${symbol}`}>
        <AddPortfolioButton style={{ maxWidth: 220 }}>News</AddPortfolioButton>
      </a>
      <a target="_blank"  href={`/chart/${symbol}/nd`}>
        <AddPortfolioButton style={{ maxWidth: 120 }}>Chart</AddPortfolioButton>
      </a>
    </SearchStockCardStyled>
  );
}

///chart/AAPL/270
