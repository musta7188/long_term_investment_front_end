import React, {useState}from 'react'
import { connect } from 'react-redux'
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
function AddStockForm({symbol, userPortfolios}) {

  const  [portfolio, setPortfolio] = useState("")


  const handleChange = (event) => {
    setPortfolio(event.target.value)
  }

  const handleSubmit = (e) =>{
e.preventDefault()
console.log(portfolio)
console.log(symbol)
  }


  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
      <FormControl >
        <InputLabel id="demo-simple-select-autowidth-label">
          PlayList
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={portfolio}
          onChange={handleChange}
          autoWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
        {userPortfolios.map(port => <MenuItem value={port.id}>{port.name}</MenuItem> )}
          
        </Select>
        <FormHelperText>Select A Portfolio</FormHelperText>
        <button type="submit" > Add</button>
      </FormControl>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userPortfolios: state.userPortfolios
  }
}

export default connect(mapStateToProps) (AddStockForm)



