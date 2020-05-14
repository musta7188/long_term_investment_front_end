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

function StockCard({ stock, getSelectedStock, getChartData, getSummeryDetails }) {
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
     setCurrentStockData(data['summaryDetail'])
    
    }
  )
  .catch((error) => console.log(error));
  }



  const submitSelectedStock = (sym) =>{
    getChartData(sym)
    getSelectedStock(sym)
    getSummeryDetails(currentStockData)
  }

  return (
    <StockHeaderGridStyled onClick={() => submitSelectedStock(stock.symbol)}>
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
      getSummeryDetails: data =>dispatch({type: 'SET_SUMMERY_DETAILS', payload: {data}}),
  };
};

const mapStateToProps = (state) => {
  return {
    getChartData: state.getChartData,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StockCard);
