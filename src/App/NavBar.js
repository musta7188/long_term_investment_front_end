import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bar,
  Logo,
  ControlButtonElem,
  ActiveButton,
} from "../styles/StylesNavBar";

export default function NavBar() {
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

  return (
    <Bar>
      <Logo>Long Term Investment</Logo>
      <Button value={"Recommendation"} currentSelected={currentSelected} />
      <Button value={"Portfolio"} currentSelected={currentSelected} />
      <Button value={"Search"} currentSelected={currentSelected} />
    </Bar>
  );
}
