import React, { Component } from 'react';

import {Button} from 'mdbreact';

export default class Table extends Component {
  render() {
    return (
      <div>
        {this.props.game ? 
        <Button 
          color="default"
          onClick={this.props.newHand}>
          GO
        </Button>
      :
        <Button 
          color="elegant"
          onClick={this.props.dealCards}>
          DEAL
        </Button>
      }
        
      </div>
    )
  }
}
