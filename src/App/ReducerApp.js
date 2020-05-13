const initialState = {
  recommendedStocks: [],
  selectedStock: ""

}

const ReducerApp = (state = initialState, action) => {

  if(action.type === "SET_RECOMMENDED_STOCKS"){
    return{
      ...state,
      recommendedStocks: action.payload.stocks
    }
  }
  if(action.type === "SET_SELECTED_STOCK"){
    return {
      ...state,
      selectedStock: action.payload.stock

    }
  }



  return state
}

export default ReducerApp