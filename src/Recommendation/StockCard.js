import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { currentDate } from "../Shared/TodayDate";
import {StockPercentage, StockSymbol, StockHeaderGridStyled, MyPriceSign, MyPriceValue, PercentageColor} from './StockCardStyles'
import { connect } from 'react-redux'


function StockCard({ stock, getSelectedStock }) {
  const [currentPrice, setCurrentPrice] = useState(null);

  useEffect(() => {
    getPriceData();
    console.log(currentDate);
  }, []);

  const getPriceData = () => {
    const sym = stock.symbol;
    fetch(
      `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-analysis?symbol=${sym}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "178f0cd1fbmsh29f81f40b999084p1211d1jsneb0d0e6e0aaf",
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) =>
        setCurrentPrice(data["price"]["regularMarketPrice"]["fmt"])
      ).catch(error => console.log(error))
  };

  const calculatePercentageReturn = (currentPrice, boughtPrice) => {
    let minusReturn = currentPrice - boughtPrice;
    let divideReturn = minusReturn / boughtPrice;
    let finalResults = divideReturn * 100;

    return finalResults.toString().slice(0, 5);
  };




  return (
    <StockHeaderGridStyled onClick={() => getSelectedStock(stock.symbol)}>
      <StockSymbol>{stock.symbol}</StockSymbol>

      {currentPrice ? PercentageColor(calculatePercentageReturn(currentPrice, stock.price)) : <div>{"N/D"}</div> }


      <MyPriceSign>
        <div> Entry:</div>
      </MyPriceSign>
      <MyPriceValue>${stock.price}</MyPriceValue>
      <MyPriceSign>
        <div> Current:</div>
      </MyPriceSign>
      <MyPriceValue>${currentPrice? currentPrice : "00"}</MyPriceValue>
    </StockHeaderGridStyled>
  );
}


const mapDispatchToProps = dispatch => {
  return {
    getSelectedStock: stock => dispatch({type: "SET_SELECTED_STOCK", payload: {stock}})
  }
}

export default connect(null, mapDispatchToProps) (StockCard)
