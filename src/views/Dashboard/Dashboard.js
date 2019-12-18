import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import CustomButtons from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyles.js";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import CenterFocusWeakIcon from '@material-ui/icons/CenterFocusWeak';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import moment from 'moment'

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div style={{height: '100%'}}>
      <GridContainer style={{height: '100%'}}>
        <GridItem xs={12} sm={12} md={7}>
          
        </GridItem>
      </GridContainer>
    </div>
  );
}
