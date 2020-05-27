import React from "react";
import { connect } from "react-redux";
import SearchedStockCard from "./SearchedStockCard";
import { StockContainer } from "../styles/SearchedStockCardstyles";

function SearchedStockContainer({ stocks }) {
  return (
    <StockContainer>
      {stocks &&
        stocks.map((stock) => (
          <SearchedStockCard
            name={stock["2. name"]}
            symbol={stock["1. symbol"]}
            type={stock["3. type"]}
            region={stock["4. region"]}
            marketOpen={stock["5. marketOpen"]}
            marketClose={stock["6. marketClose"]}
          />
        ))}
    </StockContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    stocks: state.searchedStocks,
  };
};

export default connect(mapStateToProps)(SearchedStockContainer);
