import React, { Component } from 'react';

import {Button} from 'mdbreact';

export default class Table extends Component {
  render() {
    return (
      <div className="btn-container">
        {this.props.game ? 
        <Button 
          id="go-btn"
          color="danger"
          onClick={this.props.newHand}>
          GO
        </Button>
      :
        <Button 
          id="deal-btn"
          color="yellow"
          onClick={this.props.dealCards}>
          DEAL
        </Button>
      }
        
      </div>
    )
  }
}
