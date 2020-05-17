import React, {useState, useEffect}from 'react';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {createPortfolio} from '../APIs/Apis'
import { connect } from 'react-redux';


function CreatePortfolioForm(props) {

  const {addPortfolio} = props

const [portfolioName, setPortfolioName] = useState("")


const handleSubmit = (e) => {
  e.preventDefault()

  const body = {
    name: portfolioName
  }
  createPortfolio(body, localStorage.token)
  .then(data => {
     addPortfolio(data.portfolio)})
  .catch(error => console.log(error))
}



  return (
    <form onSubmit={(e) => handleSubmit(e)}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountBalanceWalletIcon />
          </Grid>
          <Grid item>
            <TextField 
            id="portfolio-name" 
            label="Portfolio Name" 
            name="portfolio-name"
            value={portfolioName}
            onChange={(e) => setPortfolioName(e.target.value)}
            />
          </Grid>
        </Grid>

    </form>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPortfolio: (portfolio) => dispatch({ type: "ADD_PORTFOLIO", payload: { portfolio } }),
  };
};

export default connect(null, mapDispatchToProps) (CreatePortfolioForm);