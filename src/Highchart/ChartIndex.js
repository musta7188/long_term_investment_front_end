import React, { useState, useEffect } from "react";
import HighChartsConfig from "./HighchartsConfig";
import ReactHighcharts from "react-highcharts";
import styled from "styled-components";
import ChartTheme from "./ChartTheme";
import { connect } from 'react-redux'

ReactHighcharts.Highcharts.setOptions(ChartTheme);
const ChartDiv = styled.div`
  padding: 10px;
  background: black;
`;

function ChartIndex({getChartDataFunction}) {
  const [data, setData] = useState({});

  useEffect(() => {
   
    getChartDataFunction(getChartData)
 
  }, []);


  const getChartData = (symbol) => {


    fetch(
      `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart?interval=1d&region=US&symbol=${symbol}&lang=en&range=ytd`,
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
      .then((data) => {
        let combineData = [];

        let price = data["chart"]["result"][0]["indicators"]["quote"][0]["open"];
        let date = data["chart"]["result"][0]["timestamp"];

        for (let i = 0; i < price.length; i += 1) {
          combineData.push([date[i], price[i]]);
        }

        setData({
          name: "name",
          data: combineData,
        });
      });
  };

  return (
    <ChartDiv>
      <ReactHighcharts config={HighChartsConfig(data)} />
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
