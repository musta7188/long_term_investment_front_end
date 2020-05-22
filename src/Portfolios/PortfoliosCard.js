import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

const PortfolioDiv = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-gap: 15px;
`

const ButtonContainer = styled.div`
display: grid;
margin-top: 20px;
grid-gap: 15px;
`
const DeleteButton = styled.button`

background: red;
color: white;
width: 100px;
`

const ViewButton  = styled(DeleteButton)`
background: blue;

`




 function PortfoliosCard(props) {

const {deleteSelectedPortfolios} = props


const DeletePortfolio = (id) =>{
  debugger
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
    {portfolio.name} 
    </PortfolioDiv>
    <ButtonContainer>  
    <DeleteButton onClick={() => DeletePortfolio(portfolio.id)}><strong>delete</strong></DeleteButton>
    <Link to={`Portfolio/${portfolio.id}`}> 
    <ViewButton>
      <strong>View</strong>
    </ViewButton>
    </Link>
    </ButtonContainer>
    </>
  )
}

const mapDispatchToProps = dispatch => {
  debugger
  return {
    deleteSelectedPortfolios: portfolio => dispatch({ type: "DELETE_PORTFOLIOS", payload: { portfolio: portfolio } }),
  };
};

export default connect(null,mapDispatchToProps) (PortfoliosCard)