import React, {useState, useEffect} from 'react'
import NewsCard from './NewsCard'
import styled from 'styled-components'
import { Route } from 'react-router-dom'


const DivNews = styled.div`
display: grid;
grid-gap: 15px;
grid-template-columns: 1fr 1fr 1fr;

`


export default function NewsIndex(props) {

  const [symbol, setSymbol] = useState(props.match.params.symbol)
  const [news, setNews] = useState(null)

  useEffect(() => {
getNews()
  }, [])


  const getNews = () =>{
    fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-news?region=US&category=${symbol}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
		"x-rapidapi-key": "178f0cd1fbmsh29f81f40b999084p1211d1jsneb0d0e6e0aaf"
	}
})
.then(resp => resp.json())
.then(data => {

  setNews(data["items"]["result"])

})


  }

  return (
    <DivNews>
     {news && news.slice(0, 7).map(n => <NewsCard symbol={symbol} news={n}/>)}
    </DivNews>
  )
}
