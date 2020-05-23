import React from 'react'
import { connect } from 'react-redux'
import InfoBuyCard from './InfoBuyCard'
function index(props) {
  debugger
  const {recommendedStocks} = props
  const stock = recommendedStocks.filter(stock => stock.symbol === props["match"]["params"]["symbol"])

  return (
    <div>
    {stock.length && <InfoBuyCard stock={stock}/>}
    </div>
  )
}
const mapStateToProps = state => {
  return {
    recommendedStocks: state.recommendedStocks
  }
}


export default connect(mapStateToProps) (index)