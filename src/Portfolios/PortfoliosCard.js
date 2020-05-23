import React from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {PortfolioDiv, ButtonContainer, DeleteButton,
ViewButton, TitleDiv 
} from '../styles/PortfoliosCardStyles'


 function PortfoliosCard(props) {

const {deleteSelectedPortfolios} = props

const DeletePortfolio = (id) =>{

  const confObj = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  return fetch(`http://localhost:3001/portfolios/${id}`, confObj)
  .then((resp) => resp.json())
  .then(data => deleteSelectedPortfolios(data))
}

  const {portfolio} = props
  return (
    <>
    <PortfolioDiv >
   <TitleDiv>
     <strong>{portfolio.name}</strong>
    </TitleDiv> 

    <ButtonContainer>  
    <Link to={`Portfolio/${portfolio.id}`}> 
    <ViewButton>
      <strong>View</strong>
    </ViewButton>
    </Link>
    <DeleteButton onClick={() => DeletePortfolio(portfolio.id)}><strong>delete</strong></DeleteButton>
    </ButtonContainer>  
     </PortfolioDiv>
    </>
  )
}

const mapDispatchToProps = dispatch => {

  return {
    deleteSelectedPortfolios: portfolio => dispatch({ type: "DELETE_PORTFOLIOS", payload: { portfolio: portfolio } }),
  };
};

export default connect(null,mapDispatchToProps) (PortfoliosCard)