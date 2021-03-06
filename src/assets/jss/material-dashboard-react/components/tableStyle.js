import {
  warningColor,
  primaryColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  defaultFont
} from "assets/jss/material-dashboard-react.js";

const tableStyle = theme => ({
  defaultTableHeader: {
    color: "#333333"
  },
  warningTableHeader: {
    color: warningColor[0]
  },
  primaryTableHeader: {
    color: primaryColor[0]
  },
  dangerTableHeader: {
    color: dangerColor[0]
  },
  successTableHeader: {
    color: successColor[0]
  },
  infoTableHeader: {
    color: infoColor[0]
  },
  roseTableHeader: {
    color: roseColor[0]
  },
  grayTableHeader: {
    color: grayColor[0]
  },
  table: {
    marginBottom: "0",
    width: "100%",
    maxWidth: "100%",
    backgroundColor: "transparent",
    borderSpacing: "0",
    borderCollapse: "collapse"
  },
  tableHeadCell: {
    color: "inherit",
    ...defaultFont,
    "&, &$tableCell": {
      fontSize: "12px"
    }
  },
  tableCell: {
    ...defaultFont,
      fontSize: "12px",
      lineHeight: "21px",
      fontFamily: "Source Sans Pro",
      fontWeight: 600,
      verticalAlign: "middle",
      borderColor: '#ffffff',
      padding: "0 5px 0 5px"
  },
  tableResponsive: {
    width: "100%",
    marginTop: 51,
    overflowX: "auto"
  },
  tableHeadRow: {
    height: "28x",
    color: "inherit",
    display: "table-row",
    outline: "none",
    verticalAlign: "middle"
  },
  tableBodyRow: {
    height: "30px",
    color: "inherit",
    display: "table-row",
    outline: "none",
    verticalAlign: "middle"
  }
});

export default tableStyle;
