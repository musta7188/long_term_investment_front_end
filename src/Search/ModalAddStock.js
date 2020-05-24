import React from 'react';
import {useStyles, getModalStyle, AddPortfolioButton } from '../styles/CreateModalButtonStyles'
import Modal from '@material-ui/core/Modal';
import AddStockForm from './AddStockForm'


export default function ModalAddStock({symbol, name}) {
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
    <AddStockForm name={name} symbol={symbol} />
   
    </div>
  );

  return (
    <div>
     <AddPortfolioButton  onClick={handleOpen}> Add to portfolio</AddPortfolioButton >
      <Modal
        open={open}
        onClose={handleClose}
    
      >
        {body}
      </Modal>
    </div>
  );
}
