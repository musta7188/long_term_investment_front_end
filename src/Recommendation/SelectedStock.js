import React from 'react'
import styled from 'styled-components'
import Chart from '../Highchart'

const SelectedStockDiv = styled.div`
display: grid;

grid-template-columns: 1fr 2fr;
grid-gap: 15px;

`



const InfoDiv = styled.div`
height: 200px;
padding: 10px;
background: pink;

`





export default function SelectedStock() {
  return (
    <SelectedStockDiv>
   <InfoDiv>info</InfoDiv>
        <Chart/> 
          

    </SelectedStockDiv>
  )
}
