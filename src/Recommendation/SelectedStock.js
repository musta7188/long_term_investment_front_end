import React from 'react'
import styled from 'styled-components'


const SelectedStockDiv = styled.div`
display: grid;

grid-template-columns: 1fr 2fr;
grid-gap: 15px;
`

const ChartDiv = styled.div`

background: black;

`

const InfoDiv = styled.div`

background: pink;

`



export default function SelectedStock() {
  return (
    <SelectedStockDiv>
 <InfoDiv>information about the stock</InfoDiv>
 <ChartDiv> Chart</ChartDiv>
    </SelectedStockDiv>
  )
}
