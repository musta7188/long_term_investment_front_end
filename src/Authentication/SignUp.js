
import React, { useState, useEffect } from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {useStyles} from './AuthenticationStyles/SignInStyles'
import {signUpUser} from '../APIs/Apis'
import { connect } from "react-redux";


function SignUp(props) {

  const {setUser} = props
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    const body = {
      name: name,
      email: email,
      password: password,
      password_confirmation: passwordConfirmation,
      

    }
    signUpUser(body).then(data => {
      debugger
      if(data.erros){
        alert(data.erros[0])
      } else {
      setUser(data.user);

      localStorage.token = data.token;
      props.history.push('/Recommendation')
      }
    })

   
  };


  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} noValidate onSubmit={(e) => handelSubmit(e)} >
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              label="Name"
              type="name"
              id="name"
              autoComplete="current-name"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
        
             <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
             <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password-confirmation"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              label="Password-confirmation"
              type="password"
              id="password-confirmation"
              autoComplete="current-password-confirmation"
            />
    
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link to="sign-in" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>

            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch({ type: "SET_USER", payload: { user } }),
  };
};

export default connect(null, mapDispatchToProps) (SignUp)