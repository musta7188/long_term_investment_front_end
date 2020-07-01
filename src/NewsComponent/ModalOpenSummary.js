import React from "react";
import {
  useStyles,
  getModalStyle,
  ReadSummaryButton,
} from "../styles/CreateModalButtonStyles";
import Modal from "@material-ui/core/Modal";

export default function ModalOpenSummary({ summary }) {
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);
  ///handle the open and close of the summery option
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  ///body of the summery when it gets opened 
  const body = (
    <div style={modalStyle} className={classes.paper}>
      {summary}
    </div>
  );

  return (
    <div>
      <ReadSummaryButton onClick={handleOpen}>Read summary</ReadSummaryButton>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </div>
  );
}
