import React from "react";
import { useStyles, getModalStyle } from "../styles/CreateModalButtonStyles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import CreatePortfolioForm from "./CreatePortfolioForm";

export default function CreateModalButton() {
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <CreatePortfolioForm />
    </div>
  );

  return (
    <div>
      <Button
        variant="contained"
        style={{ background: "#0bb508", color: "white" }}
        type="button"
        onClick={handleOpen}
      >
        <strong>Create Portfolio</strong>
      </Button>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </div>
  );
}
