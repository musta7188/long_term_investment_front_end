import React, {useState,useEffect} from 'react'
import styled from 'styled-components'
import {currentDate} from '../Shared/TodayDate'


export default function StockCard({stock}) {

  const [currentPrice, setCurrentPrice ] = useState("")


  useEffect(() => {
    getPriceData()
    console.log(currentDate)
  }, [])



  
 
const getPriceData = () =>{
  const sym = stock.symbol
  fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-analysis?symbol=${sym}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
      "x-rapidapi-key": "178f0cd1fbmsh29f81f40b999084p1211d1jsneb0d0e6e0aaf"
    }
  })
  .then(resp => resp.json())
  .then(data => console.log(`${sym}`, data['price']['regularMarketPrice']['fmt']))


}







   
  return (
    <div>
      {stock.symbol}
    </div>
  )
}
