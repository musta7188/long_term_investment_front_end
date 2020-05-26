import React from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {PortfolioDiv, ButtonContainer, DeleteButton,
ViewButton, TitleDiv 
} from '../styles/PortfoliosCardStyles'


const useStyles = makeStyles({

  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

 function PortfoliosCard(props) {
  const classes = useStyles();


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

    <Card style={{width: 200}} className={classes.root}>

        <CardMedia
          className={classes.media}
          image='https://specials-images.forbesimg.com/imageserve/5ea7c2a4f0b8cf000629abe4/960x0.jpg?fit=scale'
          title="Contemplative Reptile"
        />
        <CardContent>
          <TitleDiv>
          <strong>{portfolio.name}</strong>
          </TitleDiv>
        </CardContent>


       <Link to={`/Portfolio/${portfolio.id}`} style={{textDecoration: "none"}}> 
        <Button size="small" color="primary">
          View
        </Button>
        </Link>
        <Button onClick={() => DeletePortfolio(portfolio.id)}>
          Delete
        </Button>

    </Card>
    
  );
}

const mapDispatchToProps = dispatch => {

  return {
    deleteSelectedPortfolios: portfolio => dispatch({ type: "DELETE_PORTFOLIOS", payload: { portfolio: portfolio } }),
  };
};

export default connect(null,mapDispatchToProps) (PortfoliosCard)











  
  //  <DeleteButton ><strong>delete</strong></DeleteButton>
  //  </ButtonContainer>  
  //   </PortfolioDiv>
   