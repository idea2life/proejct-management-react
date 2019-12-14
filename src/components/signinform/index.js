
import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const mainColor = '#375463';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Term of use. Privacy policy      
    </Typography>
  );
}

const CssTextField = withStyles({
  root: {
    '& label': {
      color: mainColor,
      fontFamily: 'Source Sans Pro',
    },
    '& label.Mui-focused': {
      color: mainColor,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: mainColor,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: mainColor,
      },
      '&:hover fieldset': {
        borderColor: mainColor,
      },
      '&.Mui-focused fieldset': {
        borderColor: mainColor,
      },
    },
  },
})(TextField);

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
      fontFamily: 'Source Sans Pro',
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    color: mainColor,
    fontWeight: 700,
    fontSize: 18,
    letterSpacing: 4,
    lineHeight: '11px',
    fontFamily: 'Source Sans Pro'
  },
  title: {
    color: '#4d4f5c',
    fontSize: 9,
    lineHeight: '7px',
    fontWeight: 400,
    fontFamily: 'Source Sans Pro',
    padding: 10
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    color: mainColor,
    fontWeight: 700
  },
  loginBtn: {
    margin: theme.spacing(3, 0, 2),
    background: mainColor
  },
  signupBtn: {
    margin: theme.spacing(3, 0, 2),
    color: '#4d4f5c',
    borderColor: '#4d4f5c'
  }
}));

export default function SignInForm() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography className={classes.logo} component="h1" variant="h4">
          COMPANY
        </Typography>
        <Typography className={classes.title}>
          Welcome back! Please login to your account.
        </Typography>
        <form className={classes.form} noValidate>
          <CssTextField
            margin="normal"
            className={classes.txtField}
            required
            fullWidth
            id="username"
            label="User Name"
            name="username"
            autoFocus
          />
          <CssTextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <FormControlLabel
                control={<Checkbox value="remember" style={{ color: mainColor }} />}
                label={<Typography style={{ fontFamily: 'Source Sans Pro' }}>Remember me</Typography>}
              />
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" style={{ color: mainColor }}>
                Forgot Password
              </Link>
            </Grid>
          </Grid>
          <Grid container justify="space-between" alignItems="center">
            <Grid item xs = {5} spacing = {5}>
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.loginBtn}
              >
                LogIn
              </Button>
            </Grid>
            <Grid item xs = {5} spacing = {5}>
              <Button
                type="button"
                fullWidth
                variant="outlined"
                color="primary"
                className={classes.signupBtn}
              >
                <Link to="/signup" style = {{ color: '#4d4f5c', borderColor: '#4d4f5c', textDecoration: 'none' }} >signup</Link>
              </Button>
            </Grid>
          </Grid>
          
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}