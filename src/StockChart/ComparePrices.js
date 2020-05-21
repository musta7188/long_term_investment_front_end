import React from 'react'
import styled from 'styled-components'
import {PercentageColor, calculatePercentageReturn, StockPercentage} from '../styles/StockCardStyles'

const DivStockPrice = styled.div`
margin: 10px;
font-size: 20px;
background: #000080;
display: grid;
text-align: center;
grid-template-columns: 1fr 1fr;
`

export default function ComparePrices({open, currentPrice}) {

 let current = currentPrice.toString().slice(0, 6)
  return (
    <DivStockPrice>
    <strong> 
      Return on Investment:
      {PercentageColor(calculatePercentageReturn(current, open))}
      </strong>  
      <strong> 
      Current Price:
      <StockPercentage>{current}</StockPercentage>

      </strong>  
    </DivStockPrice>
  )
}
