import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import { MenuButton, ButtonStyle } from "../styles/StylesNavBar";
export default function Hamburger() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [currentSelected, setCurrentSelected] = useState("");
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ textAlign: "right", margin: 20 }}>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={ButtonStyle}
      >
        Menu
        <MenuIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuButton
          value={"Recommendation"}
          currentSelected={currentSelected}
          setCurrentSelected={setCurrentSelected}
          handleClose={handleClose}
          inputColor={"black"}
        />
        <MenuButton
          value={"Portfolio"}
          currentSelected={currentSelected}
          setCurrentSelected={setCurrentSelected}
          handleClose={handleClose}
          inputColor={"black"}
        />
        <MenuButton
          value={"Search"}
          currentSelected={currentSelected}
          setCurrentSelected={setCurrentSelected}
          handleClose={handleClose}
          inputColor={"black"}
        />
        <MenuButton
          value={"News"}
          currentSelected={currentSelected}
          setCurrentSelected={setCurrentSelected}
          handleClose={handleClose}
          inputColor={"black"}
        />
      </Menu>
    </div>
  );
}
