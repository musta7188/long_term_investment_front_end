import React from "react";
import ChartIndex from "../Recommendation/Highchart/ChartIndex";
import { SelectedStockDiv } from "../styles/SelectedStockStyles";
import SelectedStockInfo from "./SelectedStockInfo";
////display the info about the selected stock (chart and info)
function SelectedStock() {
  return (
    <>
    {/* Recommendation page chart  */}
      <ChartIndex />
      <SelectedStockDiv>
        {/* Recommendation page info on chart */}
        <SelectedStockInfo />
      </SelectedStockDiv>
    </>
  );
}

export default SelectedStock;
