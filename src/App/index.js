import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Recommendation from "../Recommendation";
import AppLayout from "./AppLayout";
import { connect } from "react-redux";
import { getRecommendedStock } from "../APIs/Apis";
import { Route } from "react-router-dom";
import Authentication from "../Authentication";
import { validate } from "../APIs/Apis";
import PortfoliosIndex from "../Portfolios/PortfoliosIndex";
import SearchIndex from '../Search/SearchIndex'
import BuyInfo from '../BuyInfo'
function App(props) {
  const { saveRecommendedStock, setUser, currentUser } = props;
  useEffect(() => {
    checkUserLogin();

    getRecommendedStock().then((data) => saveRecommendedStock(data));
  }, [currentUser]);

  const checkUserLogin = () => {
    if (localStorage.token) {
      validate(localStorage.token).then((data) => {
        setUser(data.user);
        localStorage.token = data.token;
      });
    }
    if (!currentUser) {
    }
  };

  return (
    <>
      {localStorage.token ? (
        <AppLayout className="App">
          <NavBar />
          <Route
         
            path={"/Recommendation"}
            render={(props) => <Recommendation {...props} />}
          />
          <Route render={(props) => <PortfoliosIndex {...props} />} />

           <Route
            path={"/Search"}
          render={(props) => <SearchIndex {...props} />}
        />
          <Route
            path={"/infoBuy/:symbol"}
          render={(props) => <BuyInfo {...props} />}
        />
        </AppLayout>
      ) : (
        <Route render={(props) => <Authentication {...props} />} />
      )}
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveRecommendedStock: (stocks) =>
      dispatch({ type: "SET_RECOMMENDED_STOCKS", payload: { stocks } }),
    setUser: (user) => dispatch({ type: "SET_USER", payload: { user } }),
  };
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
