import React, { useState } from "react";
import {
  SearchInputDiv,
  SearchInputStyle,
  SearchButton,
} from "../styles/SearchInputStyles";

function NewsSearch(props) {
  const { getNews, setSymbol } = props;
  const [SearchedStock, setSearchedStock] = useState("");

  const handleSubmit = () => {
    props.history.push(`/News/${SearchedStock}`);
    setSymbol(SearchedStock);
    getNews(SearchedStock);
  };

  return (
    <>
      <SearchInputDiv>
        <SearchInputStyle
          type={"text"}
          placeholder={"Stock symbol"}
          value={SearchedStock}
          onChange={(e) => setSearchedStock(e.target.value)}
        />
        <SearchButton onClick={() => handleSubmit()}>Search</SearchButton>

        <p style={{ fontSize: 10, marginRight: 70, color:"white" }}>
          *Use the stock Symbol to find the news
        </p>
      </SearchInputDiv>
    </>
  );
}

export default NewsSearch;
