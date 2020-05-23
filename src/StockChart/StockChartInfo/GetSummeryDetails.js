import React, {useEffect, useState} from 'react'
import { getPriceData } from '../../APIs/Apis'
import StockChartShowInfo from './StockChartShowInfo'
import {SelectedStockDiv} from '../../styles/SelectedStockStyles'

export default function GetSummeryDetails({symbol}) {

  const [currentStockData, setCurrentStockData] = useState(null)
  useEffect(() => {
    fetchStockAnalysis()
  }, []);


 const fetchStockAnalysis = () =>{
  getPriceData(symbol)
  .then((data) =>
   { 
     setCurrentStockData(data['summaryDetail'])

    }
  )
  .catch((error) => console.log(error));
  }


  return (
    <SelectedStockDiv>
    { currentStockData && <StockChartShowInfo summeryDetails={currentStockData}/>}
    </SelectedStockDiv>
  )
}
