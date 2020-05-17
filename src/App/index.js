import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Recommendation from "../Recommendation";
import AppLayout from "./AppLayout";
import { connect } from "react-redux";
import {getRecommendedStock}  from "../APIs/Apis";
import { Route } from "react-router-dom";
import Authentication from "../Authentication";
import {validate} from '../APIs/Apis'
import PortfoliosIndex from '../Portfolios/PortfoliosIndex'
function App({ saveRecommendedStock, setUser,currentUser }) {

  useEffect(() => {
   
    checkUserLogin()

    getRecommendedStock().then((data) => saveRecommendedStock(data));
  }, [currentUser]);


  const checkUserLogin = () =>{
    if(localStorage.token){
      validate(localStorage.token).then(data => {
        setUser(data.user)
        localStorage.token = data.token
      })
      
    } 
  }

  return (
   <>
      {localStorage.token ? (
        <AppLayout className="App">
          <NavBar />
          <Route
            exact
            path={"/Recommendation"}
            render={(props) => <Recommendation {...props} />
          }
          />
          <Route
          exact
          path={"/Portfolio"}
          render={(props) => <PortfoliosIndex{...props} />
        
        }
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
      setUser: (user) => dispatch({ type: "SET_USER", payload: { user } })
  };
};

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
