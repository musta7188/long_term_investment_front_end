import React, { useState } from "react";
import { Link } from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {
  Bar,
  Logo,
  ControlButtonElem,
  ActiveButton,
} from "../styles/StylesNavBar";
import { connect } from "react-redux";

 function NavBar({setUser, props}) {
  const [currentSelected, setCurrentSelected] = useState("");

  ///take two argument the value to display and active value, if the value of active 
  function Button({ value, currentSelected }) {
    return currentSelected === value ? (
      <Link to={value}>
        {" "}
        <ActiveButton>{value}</ActiveButton>
      </Link>
    ) : (
      <Link to={value} color="white" onClick={() => setCurrentSelected(value)}>
        {" "}
        <ControlButtonElem>{value}</ControlButtonElem>
      </Link>
    );
  }

   const handleLogOut = () =>{
    setUser(null)
    localStorage.removeItem("token")
   }

  return (
   <>
 <div><ExitToAppIcon onClick={() => handleLogOut()}/></div>  

   <Bar>
      <Logo>Long Term Investment</Logo>
      <Button value={"Recommendation"} currentSelected={currentSelected} />
      <Button value={"Portfolio"} currentSelected={currentSelected} />
      <Button value={"Search"} currentSelected={currentSelected} />
   
    </Bar>
    
    </>
  );
}


const mapDispatchToProps = (dispatch) => {
  return {
      setUser: (user) => dispatch({ type: "SET_USER", payload: { user } })
  };
};

export default connect(null, mapDispatchToProps) (NavBar)