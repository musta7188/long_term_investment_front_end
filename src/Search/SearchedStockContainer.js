import React from 'react'
import { connect } from 'react-redux'
import SearchedStockCard from './SearchedStockCard'
import styled from 'styled-components'


const StockContainer = styled.div`
margin-top: 30px;
display: grid;
grid-gap: 50px;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`

 function SearchedStockContainer({stocks}) {


  return (
    <StockContainer>
      {stocks && stocks.map(stock =>
        <SearchedStockCard
        name={stock["2. name"]}
        symbol={stock["1. symbol"]}
        type={stock["3. type"]}
        region={stock["4. region"]}
        marketOpen={stock["5. marketOpen"]}
        marketClose={stock["6. marketClose"]}
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
