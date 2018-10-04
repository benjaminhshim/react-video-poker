import React, { Component } from 'react';
import './Score.css';

export default class Score extends Component {

  render() {
    return (
      <div className="score-container">
      {!this.props.winPair && !this.props.winStraight ? <h3 id="score">SCORE: {this.props.score}</h3> :
        <div>
          {this.props.winPair &&<h3 className="win-msg">{this.props.winPairMsg}</h3>}
          {this.props.winStraight &&<h3 className="win-msg">{this.props.winStraightMsg}</h3>}
        </div>
      
    }
          

      </div>
    )
  }
}
