import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import { Route } from "react-router-dom";
import NewsSearch from "./NewsSearch";
import { DivNews } from "../styles/NewsCardStyles";
import { fetchNews } from "../APIs/Apis";

export default function NewsIndex(props) {
  const [symbol, setSymbol] = useState(props.match.params.symbol);
  const [news, setNews] = useState(null);

  useEffect(() => {
    getNews(symbol);
  }, []);

  const getNews = (symbol) => {
    fetchNews(symbol).then((data) => {
      setNews(data["items"]["result"]);
    });
  };

  return (
    <>
      <Route
        render={(props) => (
          <NewsSearch setSymbol={setSymbol} getNews={getNews} {...props} />
        )}
      />
      <br></br>
      <DivNews>
        {news && news.map((n) => <NewsCard symbol={symbol} news={n} />)}
      </DivNews>
    </>
  );
}
