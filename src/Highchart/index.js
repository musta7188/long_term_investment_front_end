import HighChartsConfig from './HighchartsConfig'
import React from 'react'
import ReactHighcharts from 'react-highcharts'
import styled from 'styled-components'
import ChartTheme from './ChartTheme'
ReactHighcharts.Highcharts.setOptions(ChartTheme)
const ChartDiv = styled.div`
padding: 10px;
background: black;

`

export default function(){
  return (
      <ChartDiv> <ReactHighcharts config={HighChartsConfig()}/></ChartDiv>
    
    
  )
}