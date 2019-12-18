import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from "assets/jss/material-dashboard-react/views/scheduleStyles.js";
import CustomButtons from "components/CustomButtons/Button.js";

import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';

import CKEditor from "react-ckeditor-component";

const useStyles = makeStyles(styles);

export default function Overview() {
  const classes = useStyles();
  
  return (
    <div>
      <div className={classes.titleWrapper}>
        DESCRIPTION
      </div>
      <CKEditor />
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <div style={{border: '1px solid #d1d1d1', width: 'auto'}}>
          <CustomButtons style={styles.iconBtn}>
            <CheckIcon  style={styles.btnIcon} />
          </CustomButtons>
          <CustomButtons style={styles.iconBtn}>
            <CloseIcon style={styles.btnIcon} />
          </CustomButtons>
        </div>
      </div>
      <div className={classes.titleWrapper}>PEOPLE</div>
      <p className={classes.txtContent}>Leader</p>
      <p className={classes.txtContent}>Crew</p>
      <div className={classes.titleWrapper}>ESTIMATES AND TIME</div>
      <p className={classes.txtContent}>Total Quantity</p>
      <p className={classes.txtContent}>Duration</p>
    </div>
  );
}