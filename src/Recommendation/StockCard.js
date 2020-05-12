import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { currentDate } from "../Shared/TodayDate";
import {StockPercentage, StockSymbol, StockHeaderGridStyled, MyPriceSign, MyPriceValue} from './StockCardStyles'

export default function StockCard({ stock }) {
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
      );
  };

  const calculatePercentageReturn = (currentPrice, boughtPrice) => {
    let minusReturn = currentPrice - boughtPrice;
    let divideReturn = minusReturn / boughtPrice;
    let finalResults = divideReturn * 100;

    return finalResults.toString().slice(0, 5);
  };


  // const PercentageColor({})

  return (
    <StockHeaderGridStyled>
      <StockSymbol>{stock.symbol}</StockSymbol>
      <StockPercentage>
        {currentPrice && calculatePercentageReturn(currentPrice, stock.price)}%{" "}
      </StockPercentage>

      <MyPriceSign>
        <div> Entry:</div>
      </MyPriceSign>
      <MyPriceValue>${stock.price}</MyPriceValue>
      <MyPriceSign>
        <div> Current:</div>
      </MyPriceSign>
      <MyPriceValue>${currentPrice}</MyPriceValue>
    </StockHeaderGridStyled>
  );
}
