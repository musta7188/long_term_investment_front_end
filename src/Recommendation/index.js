import React from 'react'
import StockPage from './StocksPage'
import SelectedStock from '../SelectedStock/SelectedStock'
export default function index() {
  return (
    <div>
      {/* render the recommended stock cards */}
      <StockPage/>
      {/* info blue container that render the info about the stock */}
      <SelectedStock/>
    </div>
  )
}
