import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import styles from "assets/jss/material-dashboard-react/views/scheduleStyles.js";
import CustomButtons from "components/CustomButtons/Button.js";
import Overview from "components/Schedule/Overview.js";
import Activity from "components/Schedule/Activity";
import Relations from "components/Schedule/Relations";
import Watchers from "components/Schedule/Watchers";

import CloseIcon from '@material-ui/icons/Close';
import LaunchIcon from '@material-ui/icons/Launch';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import VisibilityIcon from '@material-ui/icons/Visibility';

const AntTabs = withStyles({
  indicator: {
    backgroundColor: '#175a8e',
    maxWidth: 100,
    bottom: 'unset'
  },
})(Tabs);

const AntTab = withStyles(theme => ({
  root: {
    minWidth: 72,
    minHeight: 'unset',
    fontSize: 13,
    lineHeight: '23px',
    fontFamily: "Source Sans Pro",
    fontWeight: 600,
    padding: "0 10px",
    color: '#333333',
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: '#175a8e',
    },
    '&:focus': {
      color: '#175a8e',
    },
  },
  selected: {},
}))(props => <Tab disableRipple {...props} />);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {
        value === index &&
         <div>
          {
            value === 0 && <Overview />
          }
          {
            value === 1 && <Activity />
          }
          {
            value === 2 && <Relations />
          }
          {
            value === 3 && <Watchers />
          }
         </div>
      }
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(styles);

export default function RightComponent() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.rightContainer}>
      <div position="static" className={classes.buttonWrapper}>
        <AntTabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <AntTab label="Overview" {...a11yProps(0)} style={{padding: 5}} />
          <AntTab label="activity" {...a11yProps(1)} />
          <AntTab label="relations" {...a11yProps(2)} />
          <AntTab label="watchers" {...a11yProps(3)} />
        </AntTabs>
        <div>
          <CustomButtons style={styles.iconBtn}>
            <LaunchIcon  style={styles.btnIcon} />
          </CustomButtons>
          <CustomButtons style={styles.iconBtn}>
            <CloseIcon style={styles.btnIcon} />
          </CustomButtons>
        </div>
      </div>
      <div style={{marginBottom: 20}}>
        <CustomButtons style={styles.parentBtn}>+ Set parent</CustomButtons>
        <div style={{color: '#0101fd', fontSize: 13, fontWeight: 600}}>PHASE</div>
        <CustomButtons style={{...styles.btn, ...styles.newBtn1}}>
          New
          <ArrowDropDownIcon style={{margin: 0}} />
        </CustomButtons>
      </div>
      
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Item Four
        </TabPanel>
      </SwipeableViews>
      <div style={styles.bottomButtonWrapper}>
        <CustomButtons style={{...styles.btn, color: '#333333'}}>
          <VisibilityIcon style={{margin: 0}} />
          Watch
        </CustomButtons>
        <CustomButtons style={{...styles.btn, color: '#333333'}}>
          More
          <ArrowDropDownIcon style={{margin: 0}} />
        </CustomButtons>
      </div>
    </div>
  );
}