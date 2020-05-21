import React, {useEffect, useState} from 'react'
import { getPriceData } from '../../APIs/Apis'
import StockChartShowInfo from './StockChartShowInfo'

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
    debugger
    }
  )
  .catch((error) => console.log(error));
  }


  return (
    <div>
    { currentStockData && <StockChartShowInfo summeryDetails={currentStockData}/>}
    </div>
  )
}
