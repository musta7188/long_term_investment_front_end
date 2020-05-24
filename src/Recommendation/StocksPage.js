import React from "react";
import { connect } from "react-redux";
import StockCard from "./StockCard";
import { SelectableCard } from "../Shared/CardStyle";
import { StockGrid } from "../styles/StocksPageStyles";


function StocksPage({ recommendedStocks }) {
  return (
    <>
   <h1 style={{textAlign:"center", marginBottom: 50}}> Our stock Recommendation for 2020</h1>
    <StockGrid>
  
      {recommendedStocks.slice(0, 5).map((stock) => (
        <SelectableCard>
          <StockCard stock={stock} />
        </SelectableCard>
      ))}
    </StockGrid>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    recommendedStocks: state.recommendedStocks,
  };
};

export default connect(mapStateToProps)(StocksPage);
