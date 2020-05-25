import React from "react";
import { connect } from "react-redux";
import PortfoliosCard from "./PortfoliosCard";
import {
  PortfoliosGrid,
  PortfoliosCardStyle,
} from "../styles/PortfolioPageStyles";

function PortfoliosPage(props) {
  const { userPortfolios } = props;

  return (
    <PortfoliosGrid>
      {userPortfolios &&
        userPortfolios.map((port) => (
              <PortfoliosCard portfolio={port} />
        ))}
    </PortfoliosGrid>
  );
}

const mapStateToProps = (state) => {
  return {
    userPortfolios: state.userPortfolios,
  };
};

export default connect(mapStateToProps)(PortfoliosPage);
