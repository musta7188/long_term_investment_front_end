import React, {useState, useEffect} from 'react'
import {SearchInputDiv, SearchInputStyle } from '../styles/SearchInputStyles'
import {fetchSearchedInput} from '../APIs/Apis'
import { connect } from 'react-redux'


function SearchInput({storeSearchedStocks}) {

  const [SearchedStock, setSearchedStock] = useState("")


  const getSearchedInput = () =>{

    fetchSearchedInput(SearchedStock).then(data => storeSearchedStocks(data["bestMatches"]))

  }



  return (
    <SearchInputDiv>
           <SearchInputStyle
           type={"text"}
           placeholder={"Search Stock"}
           value={SearchedStock}
           onChange={(e) => setSearchedStock(e.target.value) }
           />
           <button onClick={() => getSearchedInput()}>Search</button>
    </SearchInputDiv>
  )
}


const mapDispatchToProps = dispatch => {
  return {
    storeSearchedStocks: stocks => dispatch({type: "SEARCHED_STOCK", payload: {stocks}})
  }
}


export default connect(null, mapDispatchToProps) (SearchInput)