import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import AdminNavbarLinks from "./AdminNavbarLinks.js";
import styles from "assets/jss/material-dashboard-react/components/headerStyle.js";

const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();
  const { color } = props;
  const appBarClasses = classNames({
    [" " + classes[color]]: color
  });
  function getToday() {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    const dd = String(d.getDate()).padStart(2, '0');
    const month = monthNames[d.getMonth()];
    const year = d.getFullYear();
    const time = d.toLocaleTimeString().split(" ");
    const val = {
      time: `${time[0].split(":")[0]}:${time[0].split(":")[1]}`,
      ap: time[1],
      day: dd,
      monthAndYear: `${month} ${year}` 
    }
    return val;
  }
  
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
         <p className={classes.dateText}>
          <span className={classes.orangeText}>{getToday().time}</span>
          &nbsp;{getToday().ap}
          <span className={classes.orangeText}>&nbsp;&nbsp;&nbsp;&nbsp;{getToday().day}</span>
          &nbsp;{getToday().monthAndYear}
         </p>
        </div>
        <Hidden smDown implementation="css">
          <AdminNavbarLinks />
        </Hidden>
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  routes: PropTypes.arrayOf(PropTypes.object)
};
