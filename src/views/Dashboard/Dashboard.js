import React from "react";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";

export default function Dashboard() {
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Table
            tableHeaderColor="warning"
            tableHead={["TYPE", "ID", "SUBJECT", "STATUS", "ASSIGNEE"]}
            tableData={[
              ["PHASE", "42", "Construction", "Niger"],
              ["LEVEL", "43", "Level 1", "Curaçao"],
              ["AREA", "44", "Area A", "Netherlands"],
              ["TASK", "45", "Excavation", "Korea, South"],
              ["TASK", "46", "Underground", "Korea, South"]
            ]}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
