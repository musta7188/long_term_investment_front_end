import React from "react";
import ChartIndex from "../Highchart/ChartIndex";
import { SelectedStockDiv } from "../styles/SelectedStockStyles";
import SelectedStockInfo from "../SelectedStockInfo";

function SelectedStock() {
  return (
    <>
      <ChartIndex />
      <SelectedStockDiv>
        <SelectedStockInfo />
      </SelectedStockDiv>
    </>
  );
}

export default SelectedStock;
