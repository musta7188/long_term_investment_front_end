import React from "react";
import {
  SearchStockCardStyled,
  TagDiv,
  InfoDiv,
} from "../styles/SearchedStockCardstyles";
import ModalAddStock from "./ModalAddStock";
import { AddPortfolioButton } from "../styles/CreateModalButtonStyles";
import { Link } from "@material-ui/core";

export default function SearchedStockCard(props) {
  const { name, symbol, type, marketOpen, marketClose, region } = props;
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
      <ModalAddStock name={name} symbol={symbol} />
      <Link target="_blank" style={{ textDecoration: "none" }} href={`/News/${symbol}`}>
        <AddPortfolioButton style={{ maxWidth: 220 }}>News</AddPortfolioButton>
      </Link>
      <Link target="_blank"  href={`/chart/${symbol}/nd`}>
        <AddPortfolioButton style={{ maxWidth: 120 }}>Chart</AddPortfolioButton>
      </Link>
    </SearchStockCardStyled>
  );
}

///chart/AAPL/270
