
import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
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
    color: '#43425d',
    borderColor: '#43425d'
  }
}));

export default function SignInForm() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography className={classes.logo}>
          COMPANY
        </Typography>
        <Typography className={classes.title}>
          Please complete to create your account.
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container justify="space-between" alignItems="center">
            <Grid item xs = {5}>
              <CssTextField
                margin="normal"
                className={classes.txtField}
                required
                fullWidth
                id="firstname"
                label="First name"
                name="firstname"
                autoFocus
              />
            </Grid>
            <Grid item xs = {5}>
              <CssTextField
                margin="normal"
                className={classes.txtField}
                required
                fullWidth
                id="lastname"
                label="Last name"
                name="lastname"
              />
            </Grid>
          </Grid>
          <CssTextField
            margin="normal"
            className={classes.txtField}
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
          />
          <CssTextField
            margin="normal"
            className={classes.txtField}
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
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
          <CssTextField
            margin="normal"
            required
            fullWidth
            name="confirmpassword"
            label="Confirm Password"
            type="password"
            id="confirmpassword"
            autoComplete="current-password"
          />

          <FormControl fullWidth style = {{ marginTop: 15 }}>
            <InputLabel id="demo-simple-select-label" style={{color: mainColor, fontFamily: 'Source Sans Pro'}}>Select Account Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
            >
              <MenuItem value={10}>type1</MenuItem>
              <MenuItem value={20}>type2</MenuItem>
            </Select>
          </FormControl>

          <Grid item style = {{ marginTop: 20 }}>
            <FormControlLabel
              control={<Checkbox value="agree" style={{ color: mainColor }} />}
              label={<Typography style={{ fontFamily: 'Source Sans Pro' }}>I agree with terms and conditions</Typography>}
            />
          </Grid>
          <Grid container justify="center" alignItems="center">
            <Grid item xs = {5} spacing = {5}>
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.loginBtn}
              >
                Signup
              </Button>
            </Grid>
          </Grid>
          <Grid container justify="center" alignItems="center" style = {{ marginTop: 20 }}>
            <Link to="/login" variant="body2" style={{ color: mainColor }}>
              Already have an account?Sign in
            </Link>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}