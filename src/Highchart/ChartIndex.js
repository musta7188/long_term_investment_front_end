import React, { useState, useEffect } from "react";
import ReactHighcharts from "react-highcharts";
import styled from "styled-components";
import ChartTheme from "./ChartTheme";
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { connect } from 'react-redux'
import {fetchChartData} from '../APIs/Apis'
import {roundTo} from '../Shared/Functions'
ReactHighcharts.Highcharts.setOptions(ChartTheme);


function ChartIndex({getChartDataFunction, selectedStock}) {
  const [data, setData] = useState(null);

  useEffect(() => {
   
    getChartDataFunction(getChartData)
 
  }, []);



  const getChartData = (symbol) => {


    fetchChartData(symbol).then(ChartData => {
    
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
    <div>
      {data? <HighchartsReact
      highcharts={Highcharts}
      constructorType={'stockChart'}
      options={data}
      
    /> : "Select stock for more info." }
    </div>
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
