import React from "react";
import SearchInput from "./SearchInput";
import SearchedStockContainer from "./SearchedStockContainer";
export default function SearchIndex() {
  return (
    <div>
      {/* render the input that allows the user to insert the stock is looking for */}
      <SearchInput />
      {/* is the container used to display the stocks fetched from the API */}
      <SearchedStockContainer />
    </div>
  );
}
