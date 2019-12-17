const dashboardStyles = {
  newBtn: {
    backgroundColor: 'transparent!important',
    fontSize: "12px",
    lineHeight: "21px",
    color: "#1d5f92",
    fontFamily: "Source Sans Pro",
    fontWeight: 600,
    padding: 0,
    boxShadow: 'none',
    margin: "12px 0 0 0",
    textTransform: 'none',
    "&:hover,&:focus,&:visited,&": {
      boxShadow: 'none',
      color: "#1d5f92"
    }
  },
  txt: {
    fontSize: "12px",
    lineHeight: "21px",
    color: "#707070",
    fontFamily: "Source Sans Pro",
    fontWeight: 600,
    margin: 0
  },
  topButtonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    padding: '2px 5px',
    borderRadius: '2px',
    height: 22,
    marginLeft: 5,
    backgroundColor: '#ffffff!important',
    border: '1px solid #707070',
    color: '#707070!important',
    textTransform: 'none',
  },
  createBtn: {
    backgroundColor: '#fa8f35!important',
    marginRight: 5,
    color: '#ffffff!important',
    border: 'none'
  },
  circle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '12px',
    height: '12px',
    borderRadius: '6px',
    backgroundColor: '#dbdbdb',
    fontSize: 7
  },
  btnIcon: {
    width: "15px!important",
    height: "15px!important",
    margin: "0!important"
  },
  phase: {
    background: "#0101fd!important",
    borderColor: "#707070!important"
  },
  level: {
    background: "#fd2301!important",
    borderColor: "#707070!important"
  },
  area: {
    background: "#fdcc01!important",
    borderColor: "#707070!important"
  },
  task: {
    background: "#01fd2b!important",
    borderColor: "#707070!important",
    borderRadius: "5px!important",
    height: '11px!important',
  }

};

export default dashboardStyles;
