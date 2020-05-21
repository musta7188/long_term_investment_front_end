import React, { useEffect, useState } from "react";
import { getPortfolios } from "../APIs/Apis";
import { connect } from "react-redux";
import PortfoliosPage from "./PortfoliosPage";
import CreateModalButton from "./CreateModalButton";
import { CreateDiv } from "../styles/PortfolioPageStyles";
import PortfolioDetails from "./PortfolioDetails";
import { Route } from "react-router-dom";
import StockChartIndex from '../StockChart/StockChartIndex'
import NewsIndex from '../NewsComponent/NewsIndex'
function PortfoliosIndex(props) {

  const { setPortfolios } = props;

  useEffect(() => {
    fetchPortfolios();
  }, []);

  const fetchPortfolios = () => {
    if (localStorage.token) {
      getPortfolios(localStorage.token).then((data) => {
        if (data.portfolios && data.portfolios.length) {
          setPortfolios(data.portfolios);
        }
      });
    }
  };

  return (
    <div>
      <Route
        exact
        path={"/Portfolio"}
        render={(props) => (
          <>
            <CreateDiv>
              <CreateModalButton />
            </CreateDiv>
            <PortfoliosPage {...props} />
          </>
        )}
      />

      <Route
        exact
        path={`/Portfolio/:id`}
        render={(props) => <PortfolioDetails {...props} />}
      />
      <Route
        exact
        path={`/chart/:symbol/:open`}
        render={(props) => <StockChartIndex {...props} />}
      />
      <Route
        exact
        path={`/news/:symbol`}
        render={(props) => <NewsIndex {...props} />}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPortfolios: (portfolios) =>
      dispatch({ type: "SET_PORTFOLIOS", payload: { portfolios: portfolios } }),
  };
};

export default connect(null, mapDispatchToProps)(PortfoliosIndex);
