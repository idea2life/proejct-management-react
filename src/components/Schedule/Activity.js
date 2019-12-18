import React from 'react';
import classNames from "classnames";
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import styles from "assets/jss/material-dashboard-react/views/scheduleStyles.js";

const useStyles = makeStyles(styles);

export default function Activity() {
  const classes = useStyles();
  
  return (
    <div>
      <div className={classes.titleWrapper}>
        July 29, 2019
      </div>
      <div className={classes.commentContainer}>
        <div className={classes.avatar}>HI</div>
        <div style={{width: '100%'}}>
          <div className={classes.nameWrapper}>
            <div style={{fontSize: 12, lineHeight: '21px'}}>Hack intosh</div>
            <div style={{fontSize: 10, lineHeight: '17px'}}>#1</div>
          </div>
          <div className={classes.txtComment}>Created on 07.29/2019 10:56 AM</div>
        </div>
      </div>
      <FormControl variant="outlined" fullWidth>
        <OutlinedInput
          id="outlined-adornment-amount"
          placeholder="comment and type@ to notify other people"
          classes={{
            input: classNames([classes.commentInput, classes.txtComment]),
          }}
        />
        </FormControl>
    </div>
  );
}