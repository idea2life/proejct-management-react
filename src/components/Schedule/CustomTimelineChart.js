import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
// core components
import styles from "assets/jss/material-dashboard-react/views/scheduleStyles.js";
import Timeline, { TimelineHeaders, DateHeader } from "react-calendar-timeline";
import 'react-calendar-timeline/lib/Timeline.css'
import './index.css'

const useStyles = makeStyles(styles);

export default function CustomTimelineChart(props) {
  const classes = useStyles();

  return (
    <Timeline
      className="timelineChart"
      groups={props.groups}
      items={props.items}
      sidebarWidth={props.sidebarWidth}
      itemHeightRatio={props.itemHeightRatio}
      defaultTimeStart={props.defaultTimeStart}
      defaultTimeEnd={props.defaultTimeEnd}
      itemRenderer = {({
        item,
        itemContext,
        getItemProps,
        getResizeProps,
      }) => {
        const { left: leftResizeProps, right: rightResizeProps } = getResizeProps()
        const index = props.items.findIndex(element => element.id === item.id);
        const nextItem = props.items[index + 1];
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
          className={classes.chartHeaderWrapper}
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
          className={classes.chartHeaderWrapper}
          intervalRenderer={({ getIntervalProps, intervalContext, data }) => {
            return <div {...getIntervalProps()}
              className={classNames(["rct-dateHeader", classes.chartHeader])}
              style={{
                ...getIntervalProps().style,
                marginLeft: '-1px',
                height: 15,
                borderLeft: intervalContext.intervalText === '1' ? '2px solid #bbb' : 'none' }}
              >
              {intervalContext.intervalText}

            </div>
          }}
        />
      </TimelineHeaders>
    </Timeline>
  );
}
