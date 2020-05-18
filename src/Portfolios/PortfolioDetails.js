import React, { useState, useEffect } from "react";
import { getPortfolioDetails } from "../APIs/Apis";
import { StockGrid } from "../styles/StocksPageStyles";
import StockDetails from "./StockDetails";
import {DeleteStock} from '../APIs/Apis'
export default function PortfolioDetails(props) {
  const [portfolio, setPortfolio] = useState("");
  const [stocks, setStocks] = useState("");
  const { match } = props;

  const id = match.params.id;
  useEffect(() => {
    fetchPortfolioDetails();
  }, []);

  const fetchPortfolioDetails = () => {
    getPortfolioDetails(id).then((portfolio) => {
      setPortfolio(portfolio);
      setStocks(portfolio.stocks);
    });
  };



  const DeleteSelectedStock = (id) => {
    DeleteStock(id).then((data) => {
        setStocks(stocks.filter((port) => port.id != data.id));
      });
  };

  return (
    <div>
      <h1> Portfolio: {portfolio.name}</h1>
      <StockGrid>
        {stocks.length ?
        
          stocks.map((stock) => (
            <StockDetails
              units={stock.units}
              symbol={stock.symbol}
              open={stock.open}
              id={stock.id}
              DeleteSelectedStock={DeleteSelectedStock}
            /> 
          )) : <p>Your Portfolio is empty</p> }
      </StockGrid>
    </div>
  );
}
