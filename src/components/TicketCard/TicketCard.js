import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import classNames from 'classnames'
import LinearProgress from '@material-ui/core/LinearProgress';
import Checkbox from '@material-ui/core/Checkbox';

import Card from "components/Card/Card.js";

import VisibilityIcon from '@material-ui/icons/Visibility';
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';
import AttachmentRoundedIcon from '@material-ui/icons/AttachmentRounded';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined';

import styles from "assets/jss/material-dashboard-react/views/weekLookAhead/ticketStyle.js";

const useStyles= makeStyles(styles);



export default function TicketCard(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(props.data.checked);
  const color = props.type === 1 ? '#e7f6ff' : props.type === 2 ? '#fa8f35' : '#ffe7fe';
  const BorderLinearProgress = withStyles({
    root: {
      height: 6,
      borderRadius: 12,
      backgroundColor: '#ffffff',
    },
    bar: {
      borderRadius: 12,
      backgroundColor: color,
    },
  })(LinearProgress);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <Card className={classes.card}>
      <div className={classes.container}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <div style={{flexGrow: 1, paddingRight: 10}}>
            <BorderLinearProgress
              variant="determinate"
              color="secondary"
              value={50}
            />
          </div>
          <div style={{display: 'flex'}}>
            <div className={classes.normalText}>AREA</div>
            <div className={classes.normalText}>LEVEL</div>
          </div>
        </div>
        <div className={classes.normalText}>{props.data.title}</div>
        <div style={{display: 'flex'}}>
          <div className={classes.iconWrapper}>
            <VisibilityIcon className={classes.icon} />
            <div className={classNames([classes.normalText, classes.numberText])}>{props.data.views}</div>
          </div>
          <div className={classes.iconWrapper}>
            <QuestionAnswerRoundedIcon className={classes.icon} />
            <div className={classNames([classes.normalText, classes.numberText])}>{props.data.messages}</div>
          </div>
          <div className={classes.iconWrapper}>
            <AttachmentRoundedIcon className={classes.icon} />
            <div className={classNames([classes.normalText, classes.numberText])}>{props.data.attachment}</div>
          </div>
          <Checkbox
            style={{padding: 0}}
            checked={value}
            onChange={handleChange}
            checkedIcon={<CheckBoxOutlinedIcon className={classes.icon} />}
            icon={<CheckBoxOutlineBlankOutlinedIcon className={classes.icon} />}
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
        </div>
      </div>
    </Card>
  );
}