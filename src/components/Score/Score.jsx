import React, { Component } from 'react';
import './Score.css';

export default class Score extends Component {
  render() {
    return (
      <div className="score-container">
          <h3 id="score">{this.props.score}</h3>
      </div>
    )
  }
}
