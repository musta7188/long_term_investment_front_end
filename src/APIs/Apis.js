import React from "react";

const BASE_URL = "http://localhost:3001/";
const RECOMMENDED_STOCK = `${BASE_URL}/recommended_stocks`;
const signInURL = `${BASE_URL}sign-in`
const validateURL = `${BASE_URL}validate`
const portfoliosURL = `${BASE_URL}portfolios`
const signUpURL = `${BASE_URL}users`
const ANALYSIS_STOCK =  `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-analysis?symbol=`

const post = (url, body) => {

  const ObjConfiguration = {
    method: 'POST',
    headers: {
      'Content-Type': "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(body)
  }
  return fetch(url, ObjConfiguration)
}


const get = (url, token) => {
  const ObjConfiguration = {
    headers: {
          "Authorization": token
    }
  }
  return fetch(url, ObjConfiguration)
}


export const getPortfolios = (token) =>{

 return get(portfoliosURL, token).then(resp => resp.json())
}

export const signInUser = (body) => {
 return post(signInURL, body).then(resp => resp.json())
}



export const signUpUser = (body) => {
  debugger
  return post(signUpURL, body).then(resp =>resp.json())
}








export const validate = (token) => {

 return get(validateURL, token).then(resp => resp.json())

}














const TOKEN_API_YAHOO_FINANCE =   {

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

  return fetch(`${ANALYSIS_STOCK}/${symbol}`,TOKEN_API_YAHOO_FINANCE).then(resp => resp.json())
}


