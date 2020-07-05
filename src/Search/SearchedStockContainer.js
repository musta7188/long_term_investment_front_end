import React from "react";
import { connect } from "react-redux";
import SearchedStockCard from "./SearchedStockCard";
import { StockContainer } from "../styles/SearchedStockCardstyles";

function SearchedStockContainer({ stocks }) {

  ////for each stock in creates a component card to display them and pass just the info needed 
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

///redux give the stock fetched form the API 
const mapStateToProps = (state) => {
  return {
    stocks: state.searchedStocks,
  };
};

export default connect(mapStateToProps)(SearchedStockContainer);
