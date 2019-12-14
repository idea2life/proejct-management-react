import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import styles from './plan.scss';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import TelegramIcon from '@material-ui/icons/Telegram';
import FlightIcon from '@material-ui/icons/Flight';
import VoicemailIcon from '@material-ui/icons/Voicemail';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import Slider from '@material-ui/core/Slider';

const CssToggleButton = withStyles({
    root: {
        "&:focus": {
            background: '#259fc4',
            color: '#ffffff'
        },
        "& button.Mui-selected": {
            background: '#259fc4',
            color: '#ffffff'
        }
    },
  })(ToggleButton);

  const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';
  const marks = [
    {
      value: 0,
    },
    {
      value: 1,
    },
  ];

  const IOSSlider = withStyles({
    root: {
      color: '#3880ff',
      height: 2,
      padding: '15px 0',
    },
    thumb: {
      height: 28,
      width: 28,
      backgroundColor: '#fff',
      boxShadow: iOSBoxShadow,
      marginTop: -14,
      marginLeft: -14,
      '&:focus,&:hover,&$active': {
        boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          boxShadow: iOSBoxShadow,
        },
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 11px)',
      top: -22,
      '& *': {
        background: 'transparent',
        color: '#000',
      },
    },
    track: {
      height: 2,
    },
    rail: {
      height: 2,
      opacity: 0.5,
      backgroundColor: '#bfbfbf',
    },
    mark: {
      backgroundColor: '#bfbfbf',
      height: 8,
      width: 1,
      marginTop: -3,
    },
    markActive: {
      opacity: 1,
      backgroundColor: 'currentColor',
    },
  })(Slider);
  

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            billedState: 'Annual',
            planState: 'Starter'
        }
    }

    handleBilledStateChange = (event, value) => {
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

    render() {
        return (
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
                    <Grid container item xs={7} style={{height: '100%', padding: 30}}>
                        <Grid container item xs={12} justify="space-between" alignItems="center">
                            <Typography className = "dis-text">plans</Typography>
                            <ToggleButtonGroup size="small" value={this.state.billedState} exclusive onChange={this.handleBilledStateChange}>
                                <CssToggleButton key={1} value="Monthly">Monthly</CssToggleButton>
                                <CssToggleButton key={2} value="Annual">Annual</CssToggleButton>
                            </ToggleButtonGroup>
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
                                <IOSSlider aria-label="ios slider" defaultValue={0} marks={marks} valueLabelDisplay="on" max={1} />
                                <div className = "part-container">
                                    <p className = "dis-text">Accounts <span className = "smallText">10 included</span></p>
                                    <div>
                                        <span className={classNames({"small-black": true, "small-wrapper": true})}>$150</span>
                                        <span className="small-black">per month</span>
                                    </div>
                                </div>
                                <IOSSlider aria-label="ios slider" defaultValue={0} marks={marks} valueLabelDisplay="on" max={50} min={10} />
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
                    <Grid container item xs={5} justify="center" alignItems="center">
                        {this.rightComponent()}
                    </Grid>
                </Grid>
                
            </div>
        );
    }
}
