import React from 'react';
import SignUpForm from '../../components/signupform';
import Grid from '@material-ui/core/Grid';
import background from '../../assets/background.png';

export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        }
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
                    <SignUpForm />
                </Grid>
            </Grid>
        );
    }
}
