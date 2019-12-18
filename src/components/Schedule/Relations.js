import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import CustomButtons from "components/CustomButtons/Button.js";
import Table from "components/Table/Table.js";
import styles from "assets/jss/material-dashboard-react/views/scheduleStyles.js";

const useStyles = makeStyles(styles);

export default function Relations() {
  const classes = useStyles();
  
  return (
    <div>
      <div className={classes.titleWrapper}>
        RELATION
      </div>
      <div className={classes.commentContainer}>
        <div className={classes.avatar}>HI</div>
        <div style={{width: '100%'}}>
          <div className={classes.nameWrapper}>
            <div style={{fontSize: 12, lineHeight: '21px'}}>Hack intosh</div>
            <div style={{fontSize: 10, lineHeight: '17px'}}>#1</div>
          </div>
          <div className={classes.nameWrapper} style={{fontSize: 10}}>Create new relation</div>
        </div>
      </div>
      <FormControl variant="outlined" fullWidth>
        <OutlinedInput
          id="outlined-adornment-amount"
          placeholder="CHILDREN"
          classes={{
            input: classes.childrenInput,
          }}
        />
      </FormControl>
      <Table
        tableHeaderColor="default"
        tableHead={["TYPE", "ID", "SUBJECT", "STATUS"]}
        tableData={[
        ]}
      />
      <div className={classes.commentContainer}>
        <CustomButtons style={styles.newBtn}>+ Create new child</CustomButtons>
        <div style={{padding: '14px 15px 0 15px', color: '#1d5f92'}}>&infin;</div>
        <CustomButtons style={styles.newBtn}>Add existing child</CustomButtons>
      </div>
    </div>
  );
}