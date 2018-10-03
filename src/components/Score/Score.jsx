import React, { Component } from 'react';
import './Score.css';

export default class Score extends Component {
  render() {
    return (
      <div>
          <h3>{this.props.score}</h3>
      </div>
    )
  }
}
