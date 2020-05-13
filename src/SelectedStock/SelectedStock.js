import React from "react";
import styled from "styled-components";
import Chart from "../Highchart/ChartIndex";
import { connect } from "react-redux";
const SelectedStockDiv = styled.div`
  display: grid;

  grid-template-columns: 1fr 2fr;
  grid-gap: 15px;
`;

const InfoDiv = styled.div`
  height: 200px;
  padding: 10px;
  background: pink;
`;

function SelectedStock({ selectedStock }) {
  return (
    <SelectedStockDiv>
      <InfoDiv>info</InfoDiv>
      <Chart selectedStock={selectedStock} />
    </SelectedStockDiv>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedStock: state.selectedStock,
  };
};

export default connect(mapStateToProps)(SelectedStock);
