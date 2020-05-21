import React, {useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import ChartTheme from '../Highchart/ChartTheme'
import GetSummeryDetails from './StockChartInfo/GetSummeryDetails'
import ComparePrices from './ComparePrices'

Highcharts.setOptions(ChartTheme)
export default function StockChartIndex(props) {

const [open, setOpen] = useState(props.match.params.open)
const [symbol, setSymbol] = useState(props.match.params.symbol)
const [option, setOption] = useState(null)
const [currentPrice, setCurrentPrice] = useState(null)
useEffect(() =>{
getChartData()
}, [])
debugger

const getChartData = () =>{

  
  fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart?period2=1274362788&period1=1589981988&interval=1d&region=US&symbol=${symbol}&lang=en&range=1y`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
		"x-rapidapi-key": "178f0cd1fbmsh29f81f40b999084p1211d1jsneb0d0e6e0aaf"
	}
}).then(resp => resp.json()).then(ChartData => {

  const data = []

  let date =  ChartData["chart"]["result"][0]["timestamp"]
 let open =  ChartData["chart"]["result"][0]["indicators"]["quote"][0]["open"]
 let high = ChartData["chart"]["result"][0]["indicators"]["quote"][0]["high"]
 let low = ChartData["chart"]["result"][0]["indicators"]["quote"][0]["low"]
 let close = ChartData["chart"]["result"][0]["indicators"]["quote"][0]["close"]
 let volume = ChartData["chart"]["result"][0]["indicators"]["quote"][0]["volume"]

 for (let i = 0; i < date.length; i += 1){
   data.push([date[i], open[i], high[i], low[i], close[i], volume[i]])
 }

 let lastPrice = close[close.length -1]
 debugger

 const options = {
  title: {
    text: 'My stock chart'
  },
  series: [
    {
      data: data
    }
  ]
};

setOption(options)
setCurrentPrice(lastPrice)

})

}

  return (
    <div>
    {option && 
    <>
    {currentPrice && < ComparePrices open={open} currentPrice={currentPrice}/>}
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={'stockChart'}
      options={option}
    /> 
    Summery Details
    <br></br>
    <GetSummeryDetails symbol={symbol}/>
    </>
    }
    </div>
  )
}
