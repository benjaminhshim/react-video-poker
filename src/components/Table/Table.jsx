import React, { Component } from 'react';
import './Table.css';

import {Button} from 'mdbreact';

export default class Table extends Component {
  render() {
    return (
      <div className="btn-container">
        {this.props.game ? 
        <Button 
          id="go-btn"
          color="success"
          onClick={this.props.newHand}>
          GO
        </Button>
      :
        <Button 
          id="deal-btn"
          color="danger"
          onClick={this.props.dealCards}>
          DEAL
        </Button>
      }
        
      </div>
    )
  }
}
