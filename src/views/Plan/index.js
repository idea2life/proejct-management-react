import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import styles from './plan.scss';
import TextField from '@material-ui/core/TextField';
import TelegramIcon from '@material-ui/icons/Telegram';
import FlightIcon from '@material-ui/icons/Flight';
import VoicemailIcon from '@material-ui/icons/Voicemail';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            billedState: 'Annual',
            planState: 'Starter'
        }
    }

    handleBilledStateChange = (value) => {
        this.setState({ billedState: value });
    };

    handlePlanChange = (text) => {
        this.setState({ planState: text })
    }

    planButton = (text) => {
        return(
            <Button
                className = {classNames({planBtn: true, planSelectedBtn: text === this.state.planState})}
                onClick = {() => { this.handlePlanChange(text); }}
            >
                <Grid>
                { 
                    text === 'Starter' &&
                    <div className = "btnContent">
                        <TelegramIcon className = {classNames({"btnIcon": true, "selectedIcon": this.state.planState === text })}></TelegramIcon>
                        <Typography className = "planBtnText">{text}</Typography>
                        <Typography className = "smallText"> (Single User)</Typography>
                    </div>
                    
                }
                { 
                    text === 'Premium' &&
                    <div className = "btnContent">
                        <FlightIcon className = {classNames({"btnIcon": true, "selectedIcon": this.state.planState === text })}></FlightIcon>
                        <Typography className = "planBtnText">{text}</Typography>
                        <Typography className = "smallText">(Multiple Users)</Typography>
                    </div>
                }
                { 
                    text === 'Enterprise' &&
                    <div className = "btnContent">
                        <AirplanemodeActiveIcon className = {classNames({"btnIcon": true, "selectedIcon": this.state.planState === text })}></AirplanemodeActiveIcon>
                        <Typography className = "planBtnText">{text}</Typography>
                        <Typography className = "smallText">(Custom & Unlimited plans)</Typography>
                    </div>
                }
                </Grid>
            </Button>
        )
    }

    rightComponent = () => {
        return(
            <div className = "rightWrapper">
                <Typography>BILLED { this.state.billedState === 'Annual' ? 'ANNUALLY' : 'MONTHLY' }</Typography>
                <p style = {{ fontSize: 61, fontWeight: 'bold', margin: 0 }}>{ this.state.planState === 'Starter' ? '$172' : '$410'}<span style = {{fontSize: 40}}>/mo</span></p>
                <Typography>({ this.state.planState === 'Enterprise' ? 36 : 12} month contract term)</Typography>
                <div className = "btnWrapper">
                    <Button className = "buyBtn">BUY NOW</Button>
                    <Button className = "talkBtn" variant="outlined">
                        <VoicemailIcon />
                         &nbsp;Talk to Sales
                    </Button>
                </div>
                <Typography align="center">
                    We’ve estimated your monthly cost based on theoptions 
                    you’ve chosen. Any applicable taxes are not included, and your 
                    fees are subject to increase with additional purchases.
                </Typography>
            </div>
            
        )
    }

    parBarComponent = (type, val3) => {
        const color = type === 1 ? '#259fc4' : '#999999';
        return(
            <div style = {{ display: 'flex', width: type === 1 && val3 ? '45%' : '100%', alignItems: 'center', padding: 5 }}>
                <div style = {{ width: 5, height: 5, backgroundColor: color }}>
                </div>
                <hr style = {{ backgroundColor: color, width: '100%', height: 1 }}></hr>
                <div style = {{ width: 5, height: 5, backgroundColor: color }}>
                </div>
            </div>
        )
    }
    barComponent = (val1, val2, val3) => {
        return(
            <div style = {{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', padding: '0px 0' }}>
                <div style = {{ color: '#999999' }}>{val1}</div>
                {this.parBarComponent(1, val3)}
                <div style = {{ width: 30, height: 30, backgroundColor: 'rgba(0, 0, 0, 0.12)', borderRadius: 15, color: '#259fc4', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{val2}</div>
                {
                    val3 &&
                    <div style = {{ width: '45%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {this.parBarComponent(2)}
                        <div style = {{ color: '#999999' }}>{val3}</div>
                    </div>
                }
            </div>
        )
    }

    render() {
        return (
            <div>
                <div className = "container">
                    <Typography variant="body2" className = "title" align="center">
                        BUILD YOUR PLAN
                    </Typography>
                    <Grid
                        container
                        item
                        justify="space-around"
                        alignItems="center"
                        >
                        <Grid container item md={7} style={{height: '100%', padding: '0 40px'}}>
                            <Grid container item xs={12} justify="space-between" alignItems="center">
                                <Typography className = "dis-text">plans</Typography>
                                <div style = {{ display : 'flex' }}>
                                    <Button className = {classNames({ "billedBtn": true, "leftBtn": true, "billedSelectedBtn": this.state.billedState !== 'Annual' })} onClick= {() => { this.handleBilledStateChange("Monthly"); }}>Monthly</Button>
                                    <Button className = {classNames({ "billedBtn": true, "rightBtn": true, "billedSelectedBtn": this.state.billedState === 'Annual' })} onClick= {() => { this.handleBilledStateChange("Annual"); }}>Annual</Button>
                                </div>
                            </Grid>
                            <Grid container item xs={12} justify="space-between" alignItems="center">
                                {this.planButton("Starter")}
                                {this.planButton("Premium")}
                                {this.planButton("Enterprise")}
                            </Grid>
                            {
                                this.state.planState === 'Starter' &&
                                <div style = {{ width: '100%' }}>
                                    <p className = "dis-text">Users <span className = "smallText">1 included</span></p>
                                    {this.barComponent(1, 1)}
                                    <div className = "part-container">
                                        <p className = "dis-text">Accounts <span className = "smallText">10 included</span></p>
                                        <div>
                                            <span className={classNames({"small-black": true, "small-wrapper": true})}>$150</span>
                                            <span className="small-black">per month</span>
                                        </div>
                                    </div>
                                    {this.barComponent(10, 25, 50)}
                                </div>
                            }
                            {
                                this.state.planState === 'Premium' &&
                                <div style = {{ width: '100%' }}>
                                    <div className = "part-container">
                                        <p className = "dis-text">Users <span className = "smallText">10 included</span></p>
                                        <div>
                                            <span className={classNames({"small-black": true, "small-wrapper": true})}>$40</span>
                                            <span className="small-black">per month</span>
                                        </div>
                                    </div>
                                    {this.barComponent(10, 75, 250)}
                                    <div className = "part-container">
                                        <p className = "dis-text">Accounts <span className = "smallText">50 included</span></p>
                                        <div>
                                            <span className={classNames({"small-black": true, "small-wrapper": true})}>$150</span>
                                            <span className="small-black">per month</span>
                                        </div>
                                    </div>
                                    {this.barComponent(50, 200, 1000)}
                                </div>
                            }
                            {
                                this.state.planState === 'Enterprise' &&
                                <div style = {{ width: '100%' }}>
                                    <div className = "part-container">
                                        <p className = "dis-text">Users <span className = "smallText">10 included</span></p>
                                        <div>
                                            <span className={classNames({"small-black": true, "small-wrapper": true})}>$40</span>
                                            <span className="small-black">per month</span>
                                        </div>
                                    </div>
                                    {this.barComponent(10, 75, 250)}
                                    <div>
                                        <p style = {{ fontWeight: 'bold', paddingTop: 20 }}>Accounts <span style = {{ fontWeight: '400' }}>UNLIMITED</span></p>
                                        <div style = {{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'cadetblue' }}>
                                            <p>Enter your enterprise pricing code here: &nbsp;</p>
                                            <TextField
                                                id="price"
                                                label="price"
                                                variant="outlined"
                                                size = "small"
                                                style = {{ height: 50 }}
                                            />
                                        </div>
                                        <div style = {{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <div style = {{ textAlign: 'right' }}>
                                                <p style = {{ color: 'cadetblue', fontSize: 14 }}>Don't have a code and would like a Unlimited plan option</p>
                                                <p style = {{ color: '#259fc4', fontWeight: 'bold' }}>Talk to sales</p>
                                            </div>
                                            <VoicemailIcon style = {{ color: '#259fc4', fontSize: 80, marginLeft: 20 }}/>

                                        </div>
                                    </div>
                                </div>
                            }
                            {
                                this.state.planState !== 'Enterprise' &&
                                <Typography style = {{ color: '#555656', fontSize: 11 }}>
                                    We offer special pricing discounts for associations and groups. <span style = {{ color: '#259fc4', fontWeight: 'bold' }}>Find out more. </span>
                                    Enter your group discount code here:
                                </Typography>
                            }
                            

                        </Grid>
                        <Grid container item md={5} justify="center" alignItems="center">
                            {this.rightComponent()}
                        </Grid>
                    </Grid>
                    
                </div>
            </div>
        );
    }
}
