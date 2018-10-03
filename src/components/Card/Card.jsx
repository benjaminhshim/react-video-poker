import React, { Component } from 'react';
import './Card.css';


export default class Card extends Component {
  state = {
    holdCard: false
  }

  holdCard = id => {
    this.setState({
      holdCard: !this.state.holdCard
    })

    this.props.toggleCard(id);
  }

  render() {
    const card = this.props.card;
    const face = card.slice(0,-1);
    const suit = card.slice(card.length-1);
    let suitImg;
    let faceImg;

    switch(suit) {
      case 'C':
        suitImg = '♣︎';
        break;
      case 'D':
        suitImg = '♦︎';
        break;
      case 'H':
        suitImg = '♥︎';
        break;
      default:
        suitImg = '♠︎';
    }

    switch(face) {
      case '11':
        faceImg = 'J';
        break;
      case '12':
        faceImg = 'Q';
        break;
      case '13':
        faceImg = 'K';
        break;
      default:
        faceImg = 'A';
    }

    return (
      <div id="card-container">
        {this.state.holdCard && this.props.game &&
         <p>HOLD</p>
        }
        <div 
          id="card"
          // onClick={() => this.props.toggleCard(this.props.card)}
          onClick={() => this.holdCard(this.props.id)}
        >
          
          {/* {this.props.card} */}
          {/* <img src={suitImg} /> */}
          {suit === 'D' || suit === 'H' ?

          <div>
            <span style={{color: 'red'}}>{face}</span>
            <span style={{color: 'red'}}>{suitImg}</span>
          </div>

          :

          <div>
            <span>{face}</span>
            <span>{suitImg}</span>
          </div>
          
          }
          
          
        </div>
      </div>
    )
  }
}
