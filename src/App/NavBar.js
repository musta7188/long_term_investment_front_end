import React, { useState } from "react";
import { Link } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {
  Bar,
  Logo
} from "../styles/StylesNavBar";
import { connect } from "react-redux";
import HamburgerMenu from './HamburgerMenu'
function NavBar({ setUser, props,  setPortfolios }) {
  const [currentSelected, setCurrentSelected] = useState("");


  const handleLogOut = () => {
    setUser(null);
    setPortfolios(null)
    localStorage.removeItem("token");
  };

  return (
    <>
      <div>
        {" "}
        <Link style={{ color: "white", textDecoration: "none" }} to="/sign-in">
          Log Out <br></br>
          <ExitToAppIcon  onClick={() => handleLogOut()} />
        </Link>{" "}
      </div>

      <Bar>
        <Logo> Smart Long Term Investment</Logo>
        <HamburgerMenu/>
      </Bar>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch({ type: "SET_USER", payload: { user } }),
    setPortfolios: portfolio => dispatch({type: "SET_PORTFOLIOS", payload: {portfolio}})
  };
};

export default connect(null, mapDispatchToProps)(NavBar);
