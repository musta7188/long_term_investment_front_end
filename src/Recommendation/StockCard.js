import React, { useState, useEffect } from "react";
import {
  calculatePercentageReturn,
  StockSymbol,
  StockHeaderGridStyled,
  MyPriceSign,
  MyPriceValue,
  PercentageColor,
  BuyInfoButton,
  NewsButton,
} from "../styles/StockCardStyles";
import { connect } from "react-redux";
import { getPriceData } from "../APIs/Apis";
import { Link } from "react-router-dom";

function StockCard({
  stock,
  getSelectedStock,
  getChartData,
  getSummeryDetails,
}) {
  const [currentPrice, setCurrentPrice] = useState(null);
  const [currentStockData, setCurrentStockData] = useState({});


  useEffect(() => {
    fetchStockAnalysis();
  }, []);

  ///component mount call this method which fetch the info about the symbol passed to the component 
  const fetchStockAnalysis = () => {
    getPriceData(stock.symbol)
      .then((data) => {
 
        setCurrentPrice(data["price"]["regularMarketPrice"]["fmt"]);
        ///set the state of the summary details about the current stock
        setCurrentStockData(data["summaryDetail"]);
      })
      .catch((error) => console.log(error));
  };

  const submitSelectedStock = (sym) => {
    
  //this function is in chartIndex.js and pass the symbol to the component to fetch the data for the selected symbol
    getChartData(sym);
    getSelectedStock(sym);
    getSummeryDetails(currentStockData);
  };

  return (
    <StockHeaderGridStyled>
      <StockSymbol>{stock.symbol}</StockSymbol>
      {/* if the current price is still loading and null will show loading... */}
      {/*  take a percentage (number) and return red or green if % < 0 */}

      {currentPrice ? (
        // calculate % takes two argument current price and open price and return a percentage return 
        PercentageColor(calculatePercentageReturn(currentPrice, stock.price))
      ) : (
        <p>{"Loading..."}</p>
      )}

      <MyPriceSign>
        <strong> Open:</strong>
      </MyPriceSign>
      <MyPriceValue>${stock.price}</MyPriceValue>
      <MyPriceSign>
        <strong> Current:</strong>
      </MyPriceSign>
      <MyPriceValue>${currentPrice ? currentPrice : "00"}</MyPriceValue>


      <Link to={`/infoBuy/${stock.symbol}`}>
        {" "}
        <BuyInfoButton>
          <strong>Buy info</strong>
        </BuyInfoButton>
      </Link>


      {/* route to the stock news  */}
      <Link to={`/News/${stock.symbol}`}>
        <NewsButton>
          <strong>News</strong>
        </NewsButton>
      </Link>


      <NewsButton onClick={(e) => submitSelectedStock(stock.symbol)}>
        <strong>Chart</strong>
      </NewsButton>
    </StockHeaderGridStyled>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSelectedStock: (stock) =>
      dispatch({ type: "SET_SELECTED_STOCK", payload: { stock } }),
    getSummeryDetails: (data) =>
      dispatch({ type: "SET_SUMMERY_DETAILS", payload: { data } }),
  };
};

const mapStateToProps = (state) => {
  return {
    getChartData: state.getChartData,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StockCard);
