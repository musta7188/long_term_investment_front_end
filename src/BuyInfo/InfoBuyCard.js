import React from 'react'

import styled from 'styled-components'




export default function InfoBuyCard({stock}) {

  debugger
  const InfoBuy = stock[0]["info_buy"]
  

  const TitleDiv = styled.h1`
  text-align: center;
  color: black;
  `
  return (
  <div> 

  <TitleDiv> Buy {stock[0].symbol}</TitleDiv>
  <p>{InfoBuy["summary"]}</p>
<TitleDiv>The Big-Picture Opportunity</TitleDiv>
<p>{InfoBuy["big_picture"]}</p>
<TitleDiv>Why We're Excited About Globus Medical</TitleDiv>
<p>{InfoBuy["why_to_buy"]}</p>
<TitleDiv>Why We Trust Leadership</TitleDiv>
<p>{InfoBuy["leadership"]}</p>
<TitleDiv>Why Now</TitleDiv>
<p>{InfoBuy["why_now"]}</p>
<TitleDiv>Potential Business Risks</TitleDiv>
<p>{InfoBuy["risk"]}</p>
<TitleDiv>Why Globus Medical Is Worth an Investment Today</TitleDiv>
<p>{InfoBuy["investment_value"]}</p>
  </div>
     
 
  )
}
