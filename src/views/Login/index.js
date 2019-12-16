import React from 'react';
import Grid from '@material-ui/core/Grid';
import SignInForm from '../../components/signinform';
import background from '../../assets/background.png';
import history from '../../history';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        }
    }

    gotoDashboard = () => {
        history.push("/admin");
    }

    render() {
        return (
            <Grid
                container
                justify="center"
                alignItems="center"
                >
                <Grid container item xs={6} style={{height: '100%'}}>
                    <img src = {background} style = {{ width: '100%', height: '100vh'}} alt="background"/>
                </Grid>
                <Grid container item xs={6} justify="center" alignItems="center">
                    <SignInForm onLogin = {this.gotoDashboard}/>
                </Grid>
            </Grid>

        );
    }
}
