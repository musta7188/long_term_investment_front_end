import React from 'react'
import styled from 'styled-components'
import ModalAddStock from './ModalAddStock'

const SearchStockCardStyled = styled.div`
display: grid;
border: solid 1px gold;
grid-template-columns: 1fr 1fr;
padding: 10px;
background: #000080;
&:hover {
  cursor: pointer;
  box-shadow: 0px 0px 2px 5px green;
}

`
const TagDiv = styled.div`
margin: 5px;
color: white;
`
const InfoDiv = styled.div`
margin: 5px;
color: gold;
`

export default function SearchedStockCard(props) {

  const {name, symbol, type, marketOpen, marketClose, region} = props
  return (
    <SearchStockCardStyled>
      <strong><TagDiv>Symbol:</TagDiv></strong>  
        <InfoDiv>{symbol}</InfoDiv>  
       <strong>  <TagDiv>Name:</TagDiv></strong>
      <InfoDiv>{name}</InfoDiv>
       <strong><TagDiv>Type:</TagDiv></strong>
      <InfoDiv>{type}</InfoDiv>
      <strong> <TagDiv>Market Open:</TagDiv></strong>
      <InfoDiv>{marketOpen}</InfoDiv>
       <strong><TagDiv>Market Close:</TagDiv></strong>
      <InfoDiv>{marketClose}</InfoDiv>
      <strong><TagDiv>Region:</TagDiv></strong>
      <InfoDiv>{region}</InfoDiv>
      <ModalAddStock name={name} symbol={symbol}/>
    </SearchStockCardStyled>
  )
}
