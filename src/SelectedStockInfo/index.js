import React from "react";
import { connect } from "react-redux";
import { InfoDiv, Detail, Value } from "../styles/SelectedStockStyles";


export const index = ({ summeryDetails }) => {
  
  const {
    previousClose,
    open,
    bid,
    bidSize,
    ask,
    askSize,
    dayLow,
    dayHigh,
    fiftyTwoWeekHigh,
    fiftyTwoWeekLow,
    volume,
    averageVolume,
    marketCap,
    beta,
    payoutRatio,
    dividendRate,
    dividendYield,
    exDividendDate,
  } = summeryDetails;

  const whatTORender = () => {
   
    return previousClose != undefined ? (
      <>
      <InfoDiv>
        <Detail>Previous Close: </Detail>
        <Value>{previousClose["fmt"]}</Value>
        <Detail>Open: </Detail>
        <Value>{open["fmt"]}</Value>
        <Detail>Bid: </Detail>
        <Value>{bid["fmt"]} X {bidSize["fmt"]}</Value>
        <Detail>Ask: </Detail>
        <Value>{ask["fmt"]} X {askSize["fmt"]}</Value>
        <Detail>Day's range: </Detail>
        <Value>{dayLow["fmt"]} - {dayHigh["fmt"]} </Value>
        <Detail>52 Weeks Range :  </Detail>
        <Value>{fiftyTwoWeekHigh["fmt"]} - {fiftyTwoWeekLow["fmt"]}</Value>
        </InfoDiv>
       <InfoDiv>
        <Detail>Volume :</Detail>
        <Value>{volume["fmt"]}</Value>
        <Detail>Average Volume :</Detail>
        <Value> {averageVolume["fmt"]}</Value>
        <Detail>Market cap :</Detail>
        <Value>{marketCap["fmt"]}</Value>
        <Detail>Beta (5Y monthly) :</Detail>
        <Value>{beta["fmt"]}</Value>
        <Detail>PE ratio (TTM) :</Detail>
        <Value>{payoutRatio["fmt"]}</Value>
        <Detail>Forward dividend {'&'} yield : </Detail>{" "}
        <Value> {dividendRate["fmt"]} ({dividendYield["fmt"]})</Value>
        <Detail>Ex-dividend date :</Detail>
        <Value>{exDividendDate["fmt"]}</Value>
      </InfoDiv>
      </>
    ) : (
      <Detail>Select a chart to view the info</Detail>
    );
  };

  return whatTORender();
};

const mapStateToProps = (state) => ({
  summeryDetails: state.summeryDetails,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(index);
