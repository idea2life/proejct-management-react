import React from "react";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import TicketCard from "components/TicketCard/TicketCard.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-dashboard-react/views/weekLookAhead/ticketStyle.js";

export default class MyPlanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFlag: 0
    }
  }

  render() {
    const ticketData = [
      {
        type: 0,
        data: {
          title: 'Underground',
          views: 3,
          messages: 2,
          attachment: 3,
          checked: true
        }
      },
      {
        type: 0,
        data: {
          title: 'Form Foundations',
          views: 3,
          messages: 2,
          attachment: 3,
          checked: true
        }
      },
      {
        type: 1,
        data: {
          title: 'Framing',
          views: 3,
          messages: 2,
          attachment: 3,
          checked: true
        }
      },
      {
        type: 2,
        data: {
          title: 'Lorem ipsum',
          views: 3,
          messages: 2,
          attachment: 3,
          checked: true
        }
      }
    ]
    return (
      <div style={{height: '100%'}}>
        <GridContainer style={{height: '100%'}}>
          <GridItem xs={6} sm={6} md={3}>
            <div style={styles.categoryTitle}>NOT STARTED</div>
            {
              ticketData.map(item => {
                return(<TicketCard type={item.type} data={item.data} />)
              })
            }
            <Button style={{...styles.cardContainer, ...styles.normalText}}>+ Add another card</Button>
          </GridItem>
          <GridItem xs={6} sm={6} md={3}>
            <div style={styles.categoryTitle}>IN PROGRESS</div>
            {
              ticketData.map(item => {
                return(<TicketCard type={item.type} data={item.data} />)
              })
            }
            <Button style={{...styles.cardContainer, ...styles.normalText}}>+ Add another card</Button>
          </GridItem>
          <GridItem xs={6} sm={6} md={3}>
            <div style={styles.categoryTitle}>WAITING/CONSTRAINED</div>
            {
              ticketData.map(item => {
                return(<TicketCard type={item.type} data={item.data} />)
              })
            }
            <Button style={{...styles.cardContainer, ...styles.normalText}}>+ Add another card</Button>
          </GridItem>
          <GridItem xs={6} sm={6} md={3}>
            <div style={styles.categoryTitle}>COMPLETED</div>
            {
              ticketData.map(item => {
                return(<TicketCard type={item.type} data={item.data} />)
              })
            }
            <Button style={{...styles.cardContainer, ...styles.normalText}}>+ Add another card</Button>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}
