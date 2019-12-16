import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import CustomButtons from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";
const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
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
        </GridItem>
      </GridContainer>
    </div>
  );
}
