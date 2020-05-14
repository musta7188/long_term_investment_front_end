import React, { useState, useEffect } from "react";
import {
  calculatePercentageReturn,
  StockSymbol,
  StockHeaderGridStyled,
  MyPriceSign,
  MyPriceValue,
  PercentageColor,
} from "../styles/StockCardStyles";
import { connect } from "react-redux";
import { getPriceData } from "../APIs/Apis";

function StockCard({ stock, getSelectedStock, getChartData }) {
  const [currentPrice, setCurrentPrice] = useState(null);
  const [currentStockData, setCurrentStockData] = useState({})

  useEffect(() => {
    fetchStockAnalysis()
  }, []);


 const fetchStockAnalysis = () =>{
  getPriceData(stock.symbol)
  .then((data) =>
   { 
     setCurrentPrice(data["price"]["regularMarketPrice"]["fmt"])
     setCurrentStockData(data)
    
    }
  )
  .catch((error) => console.log(error));
  }

  return (
    <StockHeaderGridStyled onClick={() => getChartData(stock.symbol)}>
      <StockSymbol>{stock.symbol}</StockSymbol>

      {currentPrice ? (
        PercentageColor(calculatePercentageReturn(currentPrice, stock.price))
      ) : (
        <div>{"N/D"}</div>
      )}

      <MyPriceSign>
        <div> Entry:</div>
      </MyPriceSign>
      <MyPriceValue>${stock.price}</MyPriceValue>
      <MyPriceSign>
        <div> Current:</div>
      </MyPriceSign>
      <MyPriceValue>${currentPrice ? currentPrice : "00"}</MyPriceValue>
    </StockHeaderGridStyled>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSelectedStock: (stock) =>
      dispatch({ type: "SET_SELECTED_STOCK", payload: { stock } }),
  };
};

const mapStateToProps = (state) => {
  return {
    getChartData: state.getChartData,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StockCard);
