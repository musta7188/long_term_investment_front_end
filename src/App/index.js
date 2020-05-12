import React, {useState, useEffect} from 'react';
import './App.css';
import NavBar from './NavBar'
import Recommendation from '../Recommendation'
import AppLayout from './AppLayout'
import {connect} from 'react-redux'

function App({getRecommendedStock}) {

useEffect(() =>{

  getRecommendedStocks()
},[])


const getRecommendedStocks = () =>{

  fetch("http://localhost:3001/recommended_stocks")
  .then(resp => resp.json())
  .then(data => getRecommendedStock(data))

}



  return (
    <AppLayout className="App">
      <NavBar/>
      <Recommendation/>
    </AppLayout>
  );
}


const mapDispatchToProps = dispatch => {
  return {
    getRecommendedStock: stocks => dispatch({type: "SET_RECOMMENDED_STOCKS", payload: {stocks}})
  }
}



export default connect(null, mapDispatchToProps) (App);
