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
import SearchIndex from "../Search/SearchIndex";
import BuyInfo from "../BuyInfo";
import NewsIndex from "../NewsComponent/NewsIndex";
function App(props) {
  const { saveRecommendedStock, setUser, currentUser } = props;
  useEffect(() => {
    checkUserLogin();

    ////get the stock from back end and save it in redux using the saveRecommended stock function
    getRecommendedStock().then((data) => saveRecommendedStock(data));
  }, [currentUser]);


  ///check if there is a used logged in or not by validating that the token exists 
  const checkUserLogin = () => {
    if (localStorage.token) {
      ///validate is function which get info about the current user from back end by authenticating the current token
      validate(localStorage.token).then((data) => {
        setUser(data.user);
        localStorage.token = data.token;
      });
    }
    if (!localStorage.token) {
     
    }
  };

  return (
    <>
      {localStorage.token ? (
        <AppLayout className="App">
          <NavBar />
          {/* routes to navigate the main pages on the website  */}
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
          <Route
            exact
            path={`/News/:symbol`}
            render={(props) => <NewsIndex {...props} />}
          />
        </AppLayout>
      ) : (
        <Route render={(props) => <Authentication {...props} />} />
      )}
    </>
  );
}

// send to reducer the recommended stocks and info about the user 

const mapDispatchToProps = (dispatch) => {
  return {
    saveRecommendedStock: (stocks) =>
      dispatch({ type: "SET_RECOMMENDED_STOCKS", payload: { stocks } }),
    setUser: (user) => dispatch({ type: "SET_USER", payload: { user } }),
  };
};

////return the info about the current user 
const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
