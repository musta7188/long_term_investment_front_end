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
import { Link} from "@material-ui/core";
import styled from 'styled-components'

const BuyInfoButton = styled.button`
background: blue;
margin-top:15px;
color: white;
font-size: 15px;

`

const NewsButton = styled(BuyInfoButton)`
width: 80px;
text-align: center;
`


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
    <StockHeaderGridStyled >
      <StockSymbol>{stock.symbol}</StockSymbol>

      {currentPrice ? (
        PercentageColor(calculatePercentageReturn(currentPrice, stock.price))
      ) : (
        <div>{"N/D"}</div>
      )}

      <MyPriceSign>
        <strong> Entry:</strong>
      </MyPriceSign>
      <MyPriceValue>${stock.price}</MyPriceValue>
      <MyPriceSign>
        <strong> Current:</strong>
      </MyPriceSign>
      <MyPriceValue>${currentPrice ? currentPrice : "00"}</MyPriceValue>
    <Link href={`infoBuy/${stock.symbol}`}> <BuyInfoButton><strong>Buy info</strong></BuyInfoButton></Link> 
     <Link href={`News/${stock.symbol}`}><NewsButton><strong>News</strong></NewsButton></Link> 
     <NewsButton onClick={() => submitSelectedStock(stock.symbol)}><strong>Chart</strong></NewsButton>
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
