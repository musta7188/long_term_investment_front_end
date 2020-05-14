import React from "react";
import ChartIndex from "../Highchart/ChartIndex";
import {SelectedStockDiv, InfoDiv} from '../styles/SelectedStockStyles'


function SelectedStock({ selectedStock }) {
  return (
    <SelectedStockDiv>
      <InfoDiv></InfoDiv>
      <ChartIndex  />
    </SelectedStockDiv>
  );
}



export default SelectedStock
