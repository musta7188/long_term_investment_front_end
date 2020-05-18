import React, {useState, useEffect} from 'react'
import {getPortfolioDetails} from '../APIs/Apis'
import { StockGrid} from '../styles/StocksPageStyles'
import StockDetails from './StockDetails'
export default function PortfolioDetails(props) {

  const [portfolio, setPortfolio] =  useState("")
  const [stocks, setStocks] = useState("")
  const {match} = props

  const id = match.params.id
  useEffect(() =>{
    fetchPortfolioDetails()
  }, [])

const fetchPortfolioDetails = () =>{
 
  getPortfolioDetails(id).then(portfolio => {
    setPortfolio(portfolio)
    setStocks(portfolio.stocks)
  })
}

debugger

const DeleteStock = (id) =>{

  const confObj = {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}

fetch(`http://localhost:3001/stocks/${id}`, confObj)
.then(resp => resp.json())
.then(data => {
  

  setStocks(stocks.filter(port => port.id != data.id))



})


}


  return (

    <div>
      <h1> Portfolio: {portfolio.name}</h1>  
      <StockGrid>
      
      {stocks && stocks.map(stock => <StockDetails
       units={stock.units} 
       symbol={stock.symbol} 
       open={stock.open}
       id={stock.id}
       DeleteStock={DeleteStock}
       />)}
      </StockGrid>
    </div>
  )
}
