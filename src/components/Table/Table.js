import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
// core components
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";

const useStyles = makeStyles(styles);

export default function CustomTable(props) {
  const classes = useStyles();
  const { tableHead, tableData, tableHeaderColor } = props;
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[`${tableHeaderColor}TableHeader`]}>
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                  >
                    <span>{prop}</span>
                    {prop === "ID" &&
                      <ArrowUpwardIcon style={{width: 20, height: 20, margin: '0 0 -5px 10px'}} />
                    }
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData.map((row, key) => {
            return (
              <TableRow key={key} className={classes.tableBodyRow}>
                {row.map((prop, key) => {
                  const color = prop === "TASK" ? "#01fd2b" : prop === "AREA" ? "#fdcc01" : prop === "LEVEL" ? "#fd2301" : prop === "PHASE" ? "#0101fd" : "#333333";
                  const background = key < 2 && props.colorBackground ? "#cce6f7" : "transparent";
                  let suf = "";
                  if (key === 2) {
                    suf = row[0] === "TASK" ? <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> : row[0] === "AREA" ? <span>&nbsp;&nbsp;&nbsp;&nbsp;</span> : row[0] === "LEVEL" ? <span>&nbsp;&nbsp;</span> : "";
                  }
                  return (
                    <TableCell className={classes.tableCell} style={{color: color, backgroundColor: background}} key={key}>
                      {suf}  
                      {prop}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "default"
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray",
    "default"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};
