import React from "react";
import { connect } from "react-redux";
import PortfoliosCard from "./PortfoliosCard";
import { Link } from "react-router-dom";
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
          <PortfoliosCardStyle>
            <Link
              to={`Portfolio/${port.id}`}
              style={{ color: "white", textDecoration: "none" }}
            >
              <PortfoliosCard portfolio={port} />
            </Link>{" "}
          </PortfoliosCardStyle>
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
