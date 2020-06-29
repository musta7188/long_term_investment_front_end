const initialState = {
  recommendedStocks: [],
  selectedStock: "",
  getChartData: {},
  summeryDetails: [],
  currentUser: null,
  userPortfolios: null,
  searchedStocks: [],
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
  if (action.type === "SET_SUMMERY_DETAILS") {
    return {
      ...state,
      summeryDetails: action.payload.data,
    };
  }
  if (action.type === "SET_USER") {
    return {
      ...state,
      currentUser: action.payload.user,
    };
  }
  if (action.type === "SET_PORTFOLIOS") {
    return {
      ...state,
      userPortfolios: action.payload.portfolios,
    };
  }
  if (action.type === "ADD_PORTFOLIO") {
    // if the user portfolio is not null it push a new portfolio 
    ///if the user does not  have any portfolio it create an array with the first portfolio
    return {
      ...state,
      userPortfolios: state.userPortfolios
        ? [...state.userPortfolios, action.payload.portfolio]
        : [action.payload.portfolio],
    };
  }
  if (action.type === "SEARCHED_STOCK") {
    return {
      ...state,
      searchedStocks: action.payload.stocks,
    };
  }
  if (action.type === "DELETE_PORTFOLIOS") {
    ////filter all the portfolio that id is not equal to the deleted one 
    return {
      ...state,
      userPortfolios: state.userPortfolios.filter(
        (port) => port.id != action.payload.portfolio.id
      ),
    };
  }
  return state;
};

export default ReducerApp;
