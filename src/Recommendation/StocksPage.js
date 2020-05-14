import React from "react";
import { connect } from "react-redux";
import StockCard from "./StockCard";
import { SelectableCard } from "../Shared/CardStyle";
import { StockGrid } from "../styles/StocksPageStyles";


function StocksPage({ recommendedStocks }) {
  return (
    <StockGrid>
      {recommendedStocks.slice(0, 4).map((stock) => (
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
