import React from "react";

const BASE_URL = "http://localhost:3001/";
const RECOMMENDED_STOCK = `${BASE_URL}recommended_stocks`;
const signInURL = `${BASE_URL}sign-in`;
const validateURL = `${BASE_URL}validate`;
const portfoliosURL = `${BASE_URL}user-portfolios`;
const allPortfolioURL = `${BASE_URL}portfolios`;
const allStocksURL = `${BASE_URL}stocks`;
const signUpURL = `${BASE_URL}users`;

const ANALYSIS_STOCK = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-analysis?symbol=`;

const ALPHA_VANTAGE_TOKEN = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
    "x-rapidapi-key": "178f0cd1fbmsh29f81f40b999084p1211d1jsneb0d0e6e0aaf",
  },
};

const TOKEN_API_YAHOO_FINANCE = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
    "x-rapidapi-key": "178f0cd1fbmsh29f81f40b999084p1211d1jsneb0d0e6e0aaf",
  },
};

const deleteConfig = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

const post = (url, body, token) => {
  const ObjConfiguration = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token,
    },
    body: JSON.stringify(body),
  };
  return fetch(url, ObjConfiguration);
};

const get = (url, token) => {
  const ObjConfiguration = {
    headers: {
      Authorization: token,
    },
  };
  return fetch(url, ObjConfiguration);
};

export const getPortfolioDetails = (id) => {
  return fetch(`${BASE_URL}portfolios/${id}`).then((resp) => resp.json());
};

export const createPortfolio = (body, token) => {
  return post(allPortfolioURL, body, token).then((resp) => resp.json());
};

export const createNewStock = (body) => {
  return post(allStocksURL, body).then((resp) => resp.json());
};

export const getPortfolios = (token) => {
  return get(portfoliosURL, token).then((resp) => resp.json());
};

export const signInUser = (body) => {
  return post(signInURL, body).then((resp) => resp.json());
};

export const signUpUser = (body) => {
  return post(signUpURL, body).then((resp) => resp.json());
};

export const validate = (token) => {
  return get(validateURL, token).then((resp) => resp.json());
};

export const DeleteStock = (id) => {
  return fetch(`${allStocksURL}/${id}`, deleteConfig).then((resp) =>
    resp.json()
  );
};

export function getRecommendedStock() {
  return fetch(RECOMMENDED_STOCK).then((resp) => resp.json());
}

export function getPriceData(symbol) {
  return fetch(
    `${ANALYSIS_STOCK}/${symbol}`,
    TOKEN_API_YAHOO_FINANCE
  ).then((resp) => resp.json());
}

export const fetchSearchedInput = (value) => {
  return fetch(
    `https://alpha-vantage.p.rapidapi.com/query?datatype=json&keywords=${value}&function=SYMBOL_SEARCH`,
    ALPHA_VANTAGE_TOKEN
  ).then((resp) => resp.json());
};

export const fetchNews = (symbol) => {
  return fetch(
    `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-news?region=US&category=${symbol}`,
    TOKEN_API_YAHOO_FINANCE
  ).then((resp) => resp.json());
};
export const setDeleteRequest = (id) => {
  return fetch(`${allPortfolioURL}/${id}`, deleteConfig).then((resp) =>
    resp.json()
  );
};

export const fetchChartData = (symbol) => {
 return fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart?period2=1274362788&period1=1589981988&interval=1d&region=US&symbol=${symbol}&lang=en&range=1y`, TOKEN_API_YAHOO_FINANCE).then(resp => resp.json())
}