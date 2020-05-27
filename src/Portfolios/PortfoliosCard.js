import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { TitleDiv, useStyles } from "../styles/PortfoliosCardStyles";
import {setDeleteRequest} from '../APIs/Apis'
const imageURl = "https://specials-images.forbesimg.com/imageserve/5ea7c2a4f0b8cf000629abe4/960x0.jpg?fit=scale"
function PortfoliosCard(props) {
  const classes = useStyles();

  const { deleteSelectedPortfolios } = props;

  const DeletePortfolio = (id) => {
      setDeleteRequest(id)
      .then((data) => deleteSelectedPortfolios(data));
  };

  const { portfolio } = props;
  return (
    <Card style={{ width: 200 }} className={classes.root}>
      <CardMedia
        className={classes.media}
        image={imageURl}
        title="Contemplative Reptile"
      />
      <CardContent>
        <TitleDiv>
          <strong>{portfolio.name}</strong>
        </TitleDiv>
      </CardContent>

      <Link
        to={`/Portfolio/${portfolio.id}`}
        style={{ textDecoration: "none" }}
      >
        <Button size="small" color="primary">
          View
        </Button>
      </Link>
      <Button onClick={() => DeletePortfolio(portfolio.id)}>Delete</Button>
    </Card>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteSelectedPortfolios: (portfolio) =>
      dispatch({
        type: "DELETE_PORTFOLIOS",
        payload: { portfolio: portfolio },
      }),
  };
};

export default connect(null, mapDispatchToProps)(PortfoliosCard);


