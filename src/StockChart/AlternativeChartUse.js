import React, { useState, useEffect } from "react";
// import Highcharts from 'highcharts/highstock';
// import HighchartsReact from 'highcharts-react-official';
import ReactHighstock from "react-highcharts/ReactHighstock";
import StockChartConfiguration from "./StockChartConfiguration";
import DarkBlue from 'highcharts/themes/dark-blue'
import GetSummeryDetails from "./StockChartInfo/GetSummeryDetails";
import ComparePrices from "./ComparePrices";








export default function StockChartIndex(props) {
  // ReactHighstock.setOptions(ChartTheme)
  const [open, setOpen] = useState(props.match.params.open);
  const [symbol, setSymbol] = useState(props.match.params.symbol);
  const [currentPrice, setCurrentPrice] = useState(null);
  const [ohlc, setOhlc] = useState(null);

  useEffect(() => {
    getChartData();
  }, []);

  const getChartData = () => {
    fetch(
      `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart?period2=1274362788&period1=1589981988&interval=1d&region=US&symbol=${symbol}&lang=en&range=1y`,
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
      .then((ChartData) => {
        const ohlc = [];
        const volume = [];

        let dates = ChartData["chart"]["result"][0]["timestamp"];
        let open =
          ChartData["chart"]["result"][0]["indicators"]["quote"][0]["open"];
        let high =
          ChartData["chart"]["result"][0]["indicators"]["quote"][0]["high"];
        let low =
          ChartData["chart"]["result"][0]["indicators"]["quote"][0]["low"];
        let close =
          ChartData["chart"]["result"][0]["indicators"]["quote"][0]["close"];
        let volumes =
          ChartData["chart"]["result"][0]["indicators"]["quote"][0]["volume"];

        dates.forEach((date, index) => {
          ohlc.push([
            date * 1000,
            open[index],
            high[index],
            low[index],
            close[index],
            volumes[index],
          ]);
        });

        let lastPrice = close[close.length - 1];
        setOhlc(ohlc);

        setCurrentPrice(lastPrice);
      });
  };

  return (
    <div>
      {currentPrice && (
        <ComparePrices open={open} currentPrice={currentPrice} />
      )}
      {ohlc ? <ReactHighstock config={StockChartConfiguration(ohlc, symbol)} /> : "Loading..."}
   
      <br></br>
      <GetSummeryDetails symbol={symbol} />
    </div>
  );
}
