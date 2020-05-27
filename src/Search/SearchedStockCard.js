import React from "react";
import {
  SearchStockCardStyled,
  TagDiv,
  InfoDiv,
} from "../styles/SearchedStockCardstyles";
import ModalAddStock from "./ModalAddStock";

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
    </SearchStockCardStyled>
  );
}
