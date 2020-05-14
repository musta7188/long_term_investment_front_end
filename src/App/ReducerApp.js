const initialState = {
  recommendedStocks: [],
  selectedStock: "",
  getChartData: {},
  summeryDetails: []
};

const ReducerApp = (state = initialState, action) => {
  if (action.type === "SET_RECOMMENDED_STOCKS") {
    return {
      ...state,
      recommendedStocks: action.payload.stocks,
    };
  }
  if (action.type === "SET_SELECTED_STOCK") {
    return {
      ...state,
      selectedStock: action.payload.stock,
    };
  }
  ///this is a method that take the argument of the symbol to fetch
  ///from the API
  if (action.type === "SET_CHARTDATA") {
    return {
      ...state,
      getChartData: action.payload.getChartData,
    };
  }
  if(action.type === "SET_SUMMERY_DETAILS"){
    return {
      ...state,
      summeryDetails: action.payload.data

    }
  }

  return state;
};

export default ReducerApp;
