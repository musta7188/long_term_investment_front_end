import React from 'react'
import StockPage from './StocksPage'
import SelectedStock from '../SelectedStock/SelectedStock'
export default function index() {
  return (
    <div>
      <StockPage/>
      <SelectedStock/>
    </div>
  )
}
