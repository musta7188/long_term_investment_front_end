import React, { useState, useEffect } from "react";
import HighChartsConfig from "./HighchartsConfig";
import ReactHighcharts from "react-highcharts";
import styled from "styled-components";
import ChartTheme from "./ChartTheme";
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { connect } from 'react-redux'

ReactHighcharts.Highcharts.setOptions(ChartTheme);
const ChartDiv = styled.div`
  padding: 10px;
  background: #4169E1;
`;

function ChartIndex({getChartDataFunction, selectedStock}) {
  const [data, setData] = useState({});

  useEffect(() => {
   
    getChartDataFunction(getChartData)
 
  }, []);

  const  roundTo = (value, places) => {
    var power = Math.pow(10, places);
    return Math.round(value * power) / power;
  }
  

  const getChartData = (symbol) => {


    fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart?period2=1274362788&period1=1589981988&interval=1d&region=US&symbol=${symbol}&lang=en&range=1y`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        "x-rapidapi-key": "178f0cd1fbmsh29f81f40b999084p1211d1jsneb0d0e6e0aaf"
      }
    }).then(resp => resp.json()).then(ChartData => {
    
      const data = []
      const sym  = ChartData["chart"]["result"][0]["meta"]["symbol"]
      let date =  ChartData["chart"]["result"][0]["timestamp"]
     let open =  ChartData["chart"]["result"][0]["indicators"]["quote"][0]["open"]
     let high = ChartData["chart"]["result"][0]["indicators"]["quote"][0]["high"]
     let low = ChartData["chart"]["result"][0]["indicators"]["quote"][0]["low"]
     let close = ChartData["chart"]["result"][0]["indicators"]["quote"][0]["close"]
     let volume = ChartData["chart"]["result"][0]["indicators"]["quote"][0]["volume"]
    
     for (let i = 0; i < date.length; i += 1){
       data.push([date[i] * 1000, roundTo(open[i], 2), roundTo(high[i], 2), roundTo(low[i], 2), roundTo(close[i], 2), roundTo(volume[i], 2)])
     }
    
     let lastPrice = close[close.length -1]
    
    
     const options = {
      title: {
        text: sym
      },
      series: [
        {
          data: data
        }
      ]
    };
    setData(options)
      });
  };

  return (
    <ChartDiv>
 <HighchartsReact
      highcharts={Highcharts}
      constructorType={'stockChart'}
      options={data}
    /> 
    </ChartDiv>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedStock: state.selectedStock,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getChartDataFunction: getChartData => dispatch({type: "SET_CHARTDATA", payload: {getChartData}})
  }
}


export default  connect(mapStateToProps, mapDispatchToProps) (ChartIndex)
