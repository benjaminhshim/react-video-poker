import React, { Component } from 'react';
import './User.css';

import Card from '../Card';

export default class User extends Component {
  render() {
    return (
      <div id="user-component">
        <div id="user-cards-container">
          {this.props.userCards.map(i => (
            
            <Card 
              card={i} 
              key={i}
              id={this.props.userCards.indexOf(i)}
              toggleCard={this.props.toggleCard}
              holdCard={this.props.holdCard}
              game={this.props.game}
            />
          ))}
        </div>
      </div>
    )
  }
}
