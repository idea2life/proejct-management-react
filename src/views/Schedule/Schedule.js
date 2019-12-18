import React from "react";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import CustomButtons from "components/CustomButtons/Button.js";
import CustomTimelineChart from "components/Schedule/CustomTimelineChart";
import RightComponent from "components/Schedule/RightComponent";
import styles from "assets/jss/material-dashboard-react/views/scheduleStyles.js";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import CropFreeIcon from '@material-ui/icons/CropFree';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';

import moment from 'moment'

export default class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFlag: 0
    }
  }

  create = () => {
    this.setState({ showFlag: 2 });
  }
  showCpm = () => {
    this.setState({ showFlag: 1 });
  }
  
  render() {
    const icons = [
      { icon: CropFreeIcon },
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
    const { showFlag } = this.state;
    return (
      <div style={{height: '100%'}}>
        <GridContainer style={{height: '100%'}}>
          <GridItem xs={12} sm={12} lg={7}>
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
              colorBackground
            />
            <div>
              <CustomButtons style={styles.newBtn}>+ Create new work</CustomButtons>
              <p style={styles.txt}>(1-1/1)</p>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} lg={5}>
            <div style={styles.topButtonWrapper}>
              <CustomButtons style={{...styles.btn, ...styles.createBtn}} onClick={() => {this.create();}}>
                + Create
                <ExpandMoreIcon style={{margin: 0}} />
              </CustomButtons>
              <CustomButtons style={{...styles.btn, ...styles.createBtn}} onClick={() => {this.showCpm();}}>
                Show CPM
              </CustomButtons>
              <CustomButtons style={styles.btn}>
                <LocalBarIcon style={{color: '#fa8f35', width: 12, height: 12}} />
                <span style={{padding: '0 3px'}}>Filter</span>
                <span style={styles.circle}>1</span>
              </CustomButtons>
              <CustomButtons style={styles.btn}>
                <span style={styles.circle}>i</span>
              </CustomButtons>
              {
                icons.map((item, key) => {
                  return (
                    <CustomButtons style={styles.btn} key={key}>
                      <item.icon style={styles.btnIcon}/>
                    </CustomButtons>
                  )
                })
              }
            </div>
            {
              showFlag === 0 &&
                <div style={{marginTop: '-30px'}}>
                  <Table
                    tableHeaderColor="default"
                    tableHead={["START DATE", "END DATE"]}
                    tableData={[
                      ["", ""],
                      ["", ""],
                      ["", ""],
                      ["", ""],
                      ["", ""],
                      ["", ""],
                      ["", ""],
                      ["", ""],
                      ["", ""],
                      ["", ""],
                      ["", ""],
                      ["", ""],
                      ["", ""]
                    ]}
                  />
                </div>
            }
            {
              showFlag === 1 &&
                <CustomTimelineChart
                  groups={groups}
                  items={items}
                  sidebarWidth={0}
                  itemHeightRatio={0.17}
                  defaultTimeStart={moment(new Date(2019, 7, 29))}
                  defaultTimeEnd={moment(new Date(2019, 8, 10))}
                />
            }
            {
              showFlag === 2 &&
                <RightComponent />
            }
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}
