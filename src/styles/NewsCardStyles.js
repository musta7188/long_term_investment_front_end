import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import styled from 'styled-components'
export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


export const DivNews = styled.div`
display: grid;
grid-gap: 15px;
grid-template-columns: 1fr 1fr 1fr;

`



///this function convert the data time and take as argument the function that will set the state of the data time 
export const convertDate = (date, setDateTime) => {
  let dataGet = date;

  let millisecond = dataGet * 1000;

  let newDate = new Date(millisecond);

  let currentDate = newDate.toLocaleString();

  setDateTime(currentDate);
};