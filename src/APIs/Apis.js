import React from "react";

const BASE_URL = "http://localhost:3001/";
const RECOMMENDED_STOCK = `${BASE_URL}/recommended_stocks`;
const ANALYSIS_STOCK =  `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-analysis?symbol=`
const TOKEN =   {
  method: "GET",
  headers: {
    "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
    "x-rapidapi-key":
      "178f0cd1fbmsh29f81f40b999084p1211d1jsneb0d0e6e0aaf",
  },
}

export function getRecommendedStock() {
  return fetch(RECOMMENDED_STOCK).then((resp) =>
    resp.json()
  );
}

export function getPriceData(symbol) {

  return fetch(`${ANALYSIS_STOCK}/${symbol}`,TOKEN).then(resp => resp.json())
}
