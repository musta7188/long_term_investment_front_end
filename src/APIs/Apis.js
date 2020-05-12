import React from 'react'





const getPriceData = (symbol) =>{

const TOKEN = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
    "x-rapidapi-key":
      "178f0cd1fbmsh29f81f40b999084p1211d1jsneb0d0e6e0aaf",
  }}


 return  fetch( `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-analysis?symbol=${symbol}`,TOKEN
  ).then((resp) => resp.json())
}



  export default {
    getPriceData
  }