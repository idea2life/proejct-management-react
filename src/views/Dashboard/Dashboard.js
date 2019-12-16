import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import CustomButtons from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-dashboard-react/dashboardStyles.js";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import CenterFocusWeakIcon from '@material-ui/icons/CenterFocusWeak';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  const icons = [
    { icon: CenterFocusWeakIcon },
    { icon: ZoomOutIcon },
    { icon: ZoomInIcon },
    { icon: SaveOutlinedIcon },
    { icon: ZoomOutMapIcon },
    { icon: MoreVertOutlinedIcon }
  ]
  return (
    <div style={{height: '100%'}}>
      <GridContainer style={{height: '100%'}}>
        <GridItem xs={12} sm={12} md={7}>
          <Table
            tableHeaderColor="default"
            tableHead={["TYPE", "ID", "SUBJECT", "STATUS", "ASSIGNEE"]}
            tableData={[
              ["PHASE", "42", "Construction", "", ""],
              ["LEVEL", "43", "Level 1", "", ""],
              ["AREA", "44", "Area A", "", ""],
              ["TASK", "45", "Excavation", "started", "Jim's Digging"],
              ["TASK", "46", "Underground", "On Deck", "PP Plumbers"]
            ]}
          />
          <div>
            <CustomButtons className={classes.newBtn}>+ Create new work</CustomButtons>
            <p className={classes.txt}>(1-1/1)</p>
          </div>
        </GridItem>
        <GridItem xs={12} sm={12} md={5}>
            <div className={classes.topButtonWrapper}>
              <CustomButtons className={classNames([classes.btn, classes.createBtn])}>
                + Create
                <ExpandMoreIcon style={{margin: 0}} />
              </CustomButtons>
              <CustomButtons className={classes.btn}>
                <LocalBarIcon style={{color: '#fa8f35', width: 12, height: 12}} />
                <span style={{padding: '0 3px'}}>Filter</span>
                <span className={classes.circle}>1</span>
              </CustomButtons>
              <CustomButtons className={classes.btn}>
                <span className={classes.circle}>i</span>
              </CustomButtons>
              {
                icons.map((item, key) => {
                  return (
                    <CustomButtons className={classes.btn} key={key}>
                      <item.icon className={classes.btnIcon}/>
                    </CustomButtons>
                  )
                })
              }
            </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
