import React, { Component } from 'react';

import {Button} from 'mdbreact';

// import Card from '../Card';

export default class Table extends Component {
  render() {
    return (
      <div>
        {/* <div id="community-cards-container">
          {this.props.community.map(i => (
            <Card 
              card={i}/>
          ))}
        </div> */}
        {this.props.game ? 
        <Button 
        color="elegant"
        onClick={this.props.newHand}
        >GO</Button>
      :
      <Button 
          color="elegant"
          onClick={this.props.dealCards}
          >DEAL</Button>}
        
      </div>
    )
  }
}
