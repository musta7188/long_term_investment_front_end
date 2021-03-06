import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const useStyles = makeStyles((theme) => ({
  paper: {
    color: "black",
    position: 'absolute',
    width: "600px",
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    fontSize: 20
  },
}));



function rand() {
  return Math.round(Math.random() * 20) - 10;
}

export function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export const AddPortfolioButton = styled.button`
background: green;
font-size:15px;
color:white;
margin-top: 20px;
`
export const ReadSummaryButton = styled.button`
background: #2f0bb9;
margin-bottom: 10px;
margin_top: 20px;
color: white;
font-size: 20px;

`