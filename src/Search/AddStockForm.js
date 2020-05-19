import React, { useState } from "react";
import { connect } from "react-redux";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Button from '@material-ui/core/Button';
import Select from "@material-ui/core/Select";
import NumberFormat from "react-number-format";
import styled from "styled-components";

const GridInputFields = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;
`;

const InputFieldsDiv = styled.div`
margin: 20px;
`


function AddStockForm({ symbol, userPortfolios, name }) {
  const [portfolio, setPortfolio] = useState("");
  const [entryPoint, setEntryPoint] = useState(0);
  const [units, setUnits] = useState(0);



  const handleSubmit = (e) => {
    e.preventDefault();

    const ObjConf = {
      method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
          body: JSON.stringify({
            symbol: symbol,
            open: entryPoint,
            units: units,
            portfolio_id: portfolio
          })
    }

    fetch("http://localhost:3001/stocks", ObjConf)
    .then(resp => resp.json()).then(data => console.log(data))
  }



  

  return (
    <GridInputFields>
      <form onSubmit={(e) => handleSubmit(e)}>
      <InputFieldsDiv>   <strong margin={"10px"} >Company:</strong>  {name} </InputFieldsDiv> 

        <InputFieldsDiv>
        <InputLabel>Select a Portfolio</InputLabel>
        <Select 
        value={portfolio} 
        onChange={(e) => setPortfolio(e.target.value)} 
        fullWidth
        >
          {userPortfolios.map((port) => (
            <MenuItem value={port.id}>{port.name}</MenuItem>
          ))}
        </Select>

        </InputFieldsDiv>
        <InputFieldsDiv>
        <InputLabel>Your entry point $</InputLabel>
        <br></br>
        <NumberFormat
          onValueChange={(e) => setEntryPoint(e.floatValue)}
          thousandSeparator
          isNumericString
          defaultValue={0}
          fullWidth
          prefix="$"
        />
      </InputFieldsDiv>
      <InputFieldsDiv>
        <InputLabel> How many Units</InputLabel>
        <br></br>
        <NumberFormat
          onValueChange={(e) => setUnits(e.floatValue)}
          thousandSeparator
          isNumericString
     
          defaultValue={0}
          fullWidth

        />
      </InputFieldsDiv>
      <InputFieldsDiv>   <Button type="submit" variant="contained" color="primary"> Add</Button></InputFieldsDiv>
      </form>
    </GridInputFields>
  );
}

const mapStateToProps = (state) => {
  return {
    userPortfolios: state.userPortfolios,
  };
};

export default connect(mapStateToProps)(AddStockForm);
