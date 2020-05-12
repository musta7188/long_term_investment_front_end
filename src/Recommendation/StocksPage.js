import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import StockCard from "./StockCard";
import {SelectableCard} from "../Shared/Card";
function StocksPage({ recommendedStocks }) {
  const StockGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    grid-gap: 15px;
    margin-top: 40px;
  `;

  return (
    <StockGrid>
      {recommendedStocks.map((stock) => (
        <SelectableCard>
          <StockCard stock={stock} />
        </SelectableCard>
      ))}
    </StockGrid>
  );
}

const mapStateToProps = (state) => {
  return {
    recommendedStocks: state.recommendedStocks,
  };
};

export default connect(mapStateToProps)(StocksPage);
