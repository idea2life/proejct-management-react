import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import SignInForm from '../../components/signinform';

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
                    <div style = {{ width: '100%', height: '100%', background: 'blue'}} />
                </Grid>
                <Grid container item xs={6} justify="center" alignItems="center">
                    <SignInForm onClick = {this.gotoSignup()}/>
                </Grid>
            </Grid>

        );
    }
}
