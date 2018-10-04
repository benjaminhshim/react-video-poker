import React, { Component } from 'react';
import './Card.css';


export default class Card extends Component {
  state = {
    holdCard: false
  }

  componentDidMount() {
    this.setState({
      holdCard: false
    })
  }

  holdCard = id => {
    if (this.props.game) {
      this.setState({
        holdCard: !this.state.holdCard
      })
    }
    

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
      case '14':
        faceImg = 'A';
        break;
    }

    return (
      <div id="card-container">
       
        <div 
          id="card" 
          onClick={() => this.holdCard(this.props.id)}>

          {suit === 'D' || suit === 'H' ?

            <div>
              {face === '11' || face === '12' || face === '13' || face === '14' ?
                <span style={{color: 'red'}}>{faceImg}</span> : <span style={{color: 'red'}}>{face}</span>
              }
              <span style={{color: 'red'}}>{suitImg}</span>
            </div>

          :

            <div>
              { face === '11' || face === '12' || face === '13' || face === '14' ? <span>{faceImg}</span> : <span>{face}</span> }            
              <span>{suitImg}</span>
            </div>
          
          }
        </div>

        <div id="card-status">
          {this.state.holdCard && this.props.game && <p id="card-hold">HOLD</p>}
        </div>

      </div>
    )
  }
}
