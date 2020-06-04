import React, { useState } from "react";
import { connect } from "react-redux";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import NumberFormat from "react-number-format";
import { createNewStock } from "../APIs/Apis";
import { GridInputFields, InputFieldsDiv } from "../styles/AddStockFormStyle";

function AddStockForm({ symbol, userPortfolios, name,  setOpen }) {
  const [portfolio, setPortfolio] = useState("");
  const [entryPoint, setEntryPoint] = useState(0);
  const [units, setUnits] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(false)
    const body = {
      symbol: symbol,
      open: entryPoint,
      units: units,
      portfolio_id: portfolio,
    };

    createNewStock(body).then((data) => console.log(data));
  };

  return (
    <GridInputFields>
      <form onSubmit={(e) => handleSubmit(e)}>
        <InputFieldsDiv>
          {" "}
          <strong margin={"10px"}>Company:</strong> {name}{" "}
        </InputFieldsDiv>

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
        <InputFieldsDiv>
          {" "}
          <Button type="submit" variant="contained" color="primary">
            {" "}
            Add
          </Button>
        </InputFieldsDiv>
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
