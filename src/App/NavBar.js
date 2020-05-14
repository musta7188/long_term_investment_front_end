import React, { Component } from "react";

import { Bar, Logo, ControlButtonElem } from "../styles/StylesNavBar";

export default class NavBar extends Component {
  render() {
    return (
      <Bar>
        <Logo>Long Term Investment</Logo>
        <ControlButtonElem>Recommendation</ControlButtonElem>
        <ControlButtonElem>Portfolio</ControlButtonElem>
        <ControlButtonElem>Search</ControlButtonElem>
      </Bar>
    );
  }
}
