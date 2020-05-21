import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://miro.medium.com/max/6506/1*8u8L1qX_xkZaEdnPEFGXzA.jpeg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: "blue",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
