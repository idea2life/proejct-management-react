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

import Timeline, { TimelineHeaders, DateHeader } from "react-calendar-timeline";
import 'react-calendar-timeline/lib/Timeline.css'
import './index.css'
import moment from 'moment'

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
  
  const groups = [
    { id: 1, title: '' },
    { id: 2, title: '' },
    { id: 3, title: '' },
    { id: 4, title: '' },
    { id: 5, title: '' },
    { id: 6, title: '' },
    { id: 7, title: '' },
    { id: 8, title: '' },
    { id: 9, title: '' },
    { id: 10, title: '' },
    { id: 11, title: '' },
    { id: 12, title: '' },
    { id: 13, title: '' }
  ]
  
  const items = [
    {
      id: 1,
      group: 1,
      title: '',
      type: 'phase',
      start_time: moment(new Date(2019, 7, 29, 12)),
      end_time: moment(new Date(2019, 8, 10)),
    },
    {
      id: 2,
      group: 2,
      title: '',
      type: 'level',
      start_time: moment(new Date(2019, 7, 29, 12)),
      end_time: moment(new Date(2019, 8, 10)),
    },
    {
      id: 3,
      group: 3,
      title: '',
      type: 'area',
      start_time: moment(new Date(2019, 7, 29, 12)),
      end_time: moment(new Date(2019, 8, 10)),
    },
    {
      id: 4,
      group: 4,
      title: '',
      type: 'task',
      start_time: moment(new Date(2019, 7, 29, 12)),
      end_time: moment(new Date(2019, 8, 2, 22)),
    },
    {
      id: 5,
      group: 5,
      title: '',
      type: 'task',
      start_time: moment(new Date(2019, 8, 3)),
      end_time: moment(new Date(2019, 8, 7, 5)),
    },
    {
      id: 6,
      group: 6,
      title: '',
      type: 'task',
      start_time: moment(new Date(2019, 8, 6, 2)),
      end_time: moment(new Date(2019, 8, 10)),
    },
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
              ["TASK", "45", "Excavation", "Started", "Jim's Digging"],
              ["TASK", "46", "Underground", "On Deck", "PP Plumbers"],
              ["TASK", "47", "Form Foundation", "Not Started", "Rick's Concrete"],
              ["TASK", "48", "Pour Foundation", "Not Started", "Rick's Concrete"],
              ["TASK", "49", "Strip Forms", "Not Started", "Rick's Concrete"],
              ["AREA", "50", "Area B", "", ""],
              ["TASK", "51", "Underground", "On Deck", "Carpenters"],
              ["TASK", "52", "Form Foundation", "Not Started", "Carpenters"],
              ["TASK", "53", "Pour Foundation", "Not Started", "Carpenters"],
              ["TASK", "54", "Strip Forms", "Not Started", "Carpenters"],
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
            <Timeline
              className="timelineChart"
              groups={groups}
              items={items}
              sidebarWidth={0}
              itemHeightRatio={0.17}
              defaultTimeStart={moment(new Date(2019, 7, 29))}
              defaultTimeEnd={moment(new Date(2019, 8, 10))}
              itemRenderer = {({
                item,
                itemContext,
                getItemProps,
                getResizeProps,
              }) => {
                const { left: leftResizeProps, right: rightResizeProps } = getResizeProps()
                const index = items.findIndex(element => element.id === item.id);
                const nextItem = items[index + 1];
                const delta = parseFloat(itemContext.width) / (item.end_time - item.start_time);
                const deltaWidth = nextItem ? delta * (nextItem.start_time - item.end_time) : 0;
                return (
                  <div
                    {...getItemProps(item.itemProps)}
                    className={classNames([getItemProps(item.itemProps).className, classes[item.type]])}
                  >
                  {
                    item.type === 'task' && nextItem && nextItem.start_time &&
                    <div
                      style={{
                        position: 'absolute',
                        left: (parseFloat(itemContext.width) - 5),
                        top: 5,
                        backgroundColor: '#707070',
                        height: 30,
                        width: 3
                      }}
                    />
                  }
                  {
                    item.type === 'task' && nextItem && nextItem.type === 'task' && nextItem.start_time && new Date(nextItem.start_time) > new Date(item.end_time) &&
                    <div
                      style={{
                        position: 'absolute',
                        left: (parseFloat(itemContext.width) - 5),
                        top: 35,
                        backgroundColor: '#707070',
                        height: 3,
                        width: deltaWidth + 5
                      }}
                    />
                  }
                    {itemContext.useResizeHandle ? <div {...leftResizeProps} /> : ''}
                    <div
                      className="rct-item-content"
                      style={{ maxHeight: `${itemContext.dimensions.height}` }}
                    >
                      {itemContext.title}
                    </div>
              
                    {itemContext.useResizeHandle ? <div {...rightResizeProps} /> : ''}
                  </div>
                )}
              
              }
            >
              <TimelineHeaders>
                <DateHeader unit="primaryHeader"
                style={{ background: '#f0f0f0' }}
                intervalRenderer={({ getIntervalProps, intervalContext }) => {
                    return <div
                      {...getIntervalProps()}
                      className={classNames(["rct-dateHeader rct-dateHeader-primary", classes.chartHeader, classes.chartFirstHeader])}
                        >
                        <div>{intervalContext.intervalText}</div>
                        <div>{intervalContext.intervalText}</div>
                    </div>
                  }}
                />
                <DateHeader
                  unit="day"
                  labelFormat="D"
                  intervalRenderer={({ getIntervalProps, intervalContext, data }) => {
                    return <div {...getIntervalProps()}
                      className={classNames(["rct-dateHeader", classes.chartHeader])}
                      style={{
                        ...getIntervalProps().style,
                        marginLeft: '-1px',
                        borderLeft: intervalContext.intervalText === '1' ? '2px solid #bbb' : 'none' }}
                      >
                      {intervalContext.intervalText}

                    </div>
                  }}
                />
              </TimelineHeaders>
            </Timeline>
        </GridItem>
      </GridContainer>
    </div>
  );
}
