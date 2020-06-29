import React from "react";
import { connect } from "react-redux";
import InfoBuyCard from "./InfoBuyCard";



function index(props) {
  ////it call all the recommended stock symbol and filter the one matching the symbol in the route clicked by the user 
  ////once it found it stored in the stock variable and check if that stock exists it passed to the info by card 
  const { recommendedStocks } = props;
  const stock = recommendedStocks.filter(
    (stock) => stock.symbol === props["match"]["params"]["symbol"]
  );

  return (
    <div style={{ background: "white", color: "black", padding: 30 }}>
      {stock.length && <InfoBuyCard stock={stock} />}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    recommendedStocks: state.recommendedStocks,
  };
};

export default connect(mapStateToProps)(index);
