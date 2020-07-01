import React from "react";
import { connect } from "react-redux";
import StockCard from "./StockCard";
import { SelectableCard } from "../Shared/CardStyle";
import { StockGrid } from "../styles/StocksPageStyles";

function StocksPage({ recommendedStocks }) {
  return (
    <>

      <h1 style={{ textAlign: "center", marginBottom: 50, color: "white" }}>
        Our stock Recommendation for 2020
      </h1>
      <StockGrid>
        {/* map in to the stock and passed the to the component card to be displayed  */}
        {recommendedStocks.map((stock) => (
          <SelectableCard>
            <StockCard stock={stock} />
          </SelectableCard>
        ))}
      </StockGrid>
    </>
  );
}

////get the recommendation from redux 
const mapStateToProps = (state) => {
  return {
    recommendedStocks: state.recommendedStocks,
  };
};

export default connect(mapStateToProps)(StocksPage);
