import React from 'react'
import { styled } from '@material-ui/core'





export default function InfoBuyCard({stock}) {

  debugger
  const InfoBuy = stock[0]["info_buy"]
  

debugger
  return (
  <div> 

  <h1> Buy {stock.symbol}</h1>
  <p>{InfoBuy["summary"]}</p>
<h1>The Big-Picture Opportunity</h1>
<p>{InfoBuy["big_picture"]}</p>
<h1>Why We're Excited About Globus Medical</h1>
<p>{InfoBuy["why_to_buy"]}</p>
<h1>Why We Trust Leadership</h1>
<p>{InfoBuy["leadership"]}</p>
<h1>Why Now</h1>
<p>{InfoBuy["why_now"]}</p>
<h1>Potential Business Risks</h1>
<p>{InfoBuy["risk"]}</p>
<h1>Why Globus Medical Is Worth an Investment Today</h1>
<p>{InfoBuy["investment_value"]}</p>
  </div>
     
 
  )
}
