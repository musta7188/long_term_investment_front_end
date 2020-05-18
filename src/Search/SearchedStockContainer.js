import React from 'react'
import { connect } from 'react-redux'
import SearchedStockCard from './SearchedStockCard'
import styled from 'styled-components'


const StockContainer = styled.div`
margin-top: 30px;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
grid-gap: 50px;

`

 function SearchedStockContainer({stocks}) {


  return (
    <StockContainer>
      {stocks && stocks.map(stock =>
        <SearchedStockCard
        name={stock["2. name"]}
        symbol={stock["1. symbol"]}
        />
      )
      
      }
   </StockContainer>
  )
}

const mapStateToProps = state => {
  return {
    stocks: state.searchedStocks
  }
}


export default connect(mapStateToProps) (SearchedStockContainer)
