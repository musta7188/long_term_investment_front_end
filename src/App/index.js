import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Recommendation from "../Recommendation";
import AppLayout from "./AppLayout";
import { connect } from "react-redux";
import { getRecommendedStock } from "../APIs/Apis";
import { Route } from 'react-router-dom';
function App({ saveRecommendedStock }) {
  useEffect(() => {
    getRecommendedStock().then((data) => saveRecommendedStock(data));
  }, []);

  return (
    <AppLayout className="App">
      <NavBar />
      <Route exact path={'/Recommendation'} render={props =>   <Recommendation {...props} /> }/>

    </AppLayout>
  );
}




const mapDispatchToProps = (dispatch) => {
  return {
    saveRecommendedStock: (stocks) =>
      dispatch({ type: "SET_RECOMMENDED_STOCKS", payload: { stocks } }),
  };
};

export default connect(null, mapDispatchToProps)(App);
