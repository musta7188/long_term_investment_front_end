import React, { useState } from "react";
import { Link } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {
  Bar,
  Logo, Button
} from "../styles/StylesNavBar";
import { connect } from "react-redux";

function NavBar({ setUser, props }) {
  const [currentSelected, setCurrentSelected] = useState("");


  const handleLogOut = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <>
      <div>
        {" "}
        <Link style={{ color: "white", textDecoration: "none" }} to="/sign-in">
          Log Out <br></br>
          <ExitToAppIcon onClick={() => handleLogOut()} />
        </Link>{" "}
      </div>

      <Bar>
        <Logo>Long Term Investment</Logo>
        <Button value={"Recommendation"} currentSelected={currentSelected} setCurrentSelected={setCurrentSelected} />
        <Button value={"Portfolio"} currentSelected={currentSelected} setCurrentSelected={setCurrentSelected} />
        <Button value={"Search"} currentSelected={currentSelected} setCurrentSelected={setCurrentSelected} />
        <Button value={"News"} currentSelected={currentSelected} setCurrentSelected={setCurrentSelected} />
      </Bar>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch({ type: "SET_USER", payload: { user } }),
  };
};

export default connect(null, mapDispatchToProps)(NavBar);
