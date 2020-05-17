import React, { useEffect, useState } from "react";
import { getPortfolios } from "../APIs/Apis";
import { connect } from "react-redux";
import PortfoliosPage from "./PortfoliosPage";
import CreateModalButton from "./CreateModalButton";
import { CreateDiv } from "../styles/PortfolioPageStyles";

function PortfoliosIndex(props) {
  const { setPortfolios } = props;

  useEffect(() => {
    fetchPortfolios();
  }, []);

  const fetchPortfolios = () => {
    if (localStorage.token) {

      getPortfolios(localStorage.token).then((data) => {
          debugger
          if(data.portfolios && data.portfolios.length){
             setPortfolios(data.portfolios)
          }
       });
    }
  };

  return (
    <div>
      <CreateDiv>
        <CreateModalButton />
      </CreateDiv>

      <PortfoliosPage />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPortfolios: (portfolios) =>
      dispatch({ type: "SET_PORTFOLIOS", payload: {portfolios: portfolios } }),
  };
};

export default connect(null, mapDispatchToProps)(PortfoliosIndex);
