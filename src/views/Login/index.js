import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import SignInForm from '../../components/signinform';
import background from '../../assets/background.png';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        }
    }

    gotoSignup = () => {

    }

    render() {
        return (
            <Grid
                container
                justify="center"
                alignItems="center"
                >
                <Grid container item xs={6} style={{height: '100%'}}>
                    <img src = {background} style = {{ width: '100%', height: '100vh'}}/>
                </Grid>
                <Grid container item xs={6} justify="center" alignItems="center">
                    <SignInForm onClick = {this.gotoSignup()}/>
                </Grid>
            </Grid>

        );
    }
}
