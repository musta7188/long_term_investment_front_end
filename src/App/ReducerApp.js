const initialState = {
  recommendedStocks: []

}

const ReducerApp = (state = initialState, action) => {

  if(action.type === "SET_RECOMMENDED_STOCKS"){
    return{
      ...state,
      recommendedStocks: action.payload.stocks
    }
  }



  return state
}

export default ReducerApp