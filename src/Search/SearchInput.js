import React, { useState } from "react";
import {
  SearchInputDiv,
  SearchInputStyle,
  SearchButton,
} from "../styles/SearchInputStyles";
import { fetchSearchedInput } from "../APIs/Apis";
import { connect } from "react-redux";

function SearchInput({ storeSearchedStocks }) {
  const [SearchedStock, setSearchedStock] = useState("");

  const getSearchedInput = () => {
    ///send the input to the API and it then store thee request data in the storeSearchStock method (redux)
    fetchSearchedInput(SearchedStock).then((data) =>
      storeSearchedStocks(data["bestMatches"])
    );
  };

  return (
    <>
      <SearchInputDiv>
        <SearchInputStyle
          type={"text"}
          placeholder={"Search Stock"}
          ////value equal to the state to set 
          value={SearchedStock}
          ///the input entered by the user will be set as searched value 
          onChange={(e) => setSearchedStock(e.target.value)}
        />
        {/* call on the getSearchedInput which pass the value to the API */}
        <SearchButton onClick={() => getSearchedInput()}>Search</SearchButton>
      </SearchInputDiv>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeSearchedStocks: (stocks) =>
      dispatch({ type: "SEARCHED_STOCK", payload: { stocks } }),
  };
};

export default connect(null, mapDispatchToProps)(SearchInput);
