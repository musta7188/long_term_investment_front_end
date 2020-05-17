import React, {useEffect, useState} from 'react'
import {getPortfolios} from '../APIs/Apis'


export default function PortfoliosPage() {

useEffect(() => {

  fetchPortfolios()

})

const fetchPortfolios = () =>{
  if(localStorage.token){
    getPortfolios(localStorage.token).then(data => console.log(data["portfolios"]))
  }
}

  return (
    <div>
      PortfoliosPage
    </div>
  )
}
