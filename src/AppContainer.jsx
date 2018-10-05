import React, { Component } from 'react';

import Table from './components/Table';
import User from './components/User';
import Score from './components/Score';


export default class AppContainer extends Component {
    state = {
        deck: [],
        user: [],
        heldCards: [],
        score: 0,    
        game: false,
        card1: false,
        card2: false,
        card3: false,
        card4: false,
        card5: false,
        winPair: false,
        winStraight: false,
        winPairMsg: 'PAIR',
        winStraightMsg: 'STRAIGHT'
    }

    componentDidMount() {
        // SHUFFLE CARDS WHEN GAME STARTS
        this.shuffleCards();
    }


    shuffleCards = () => {
        const cardSuit = ['C', 'D', 'H', 'S'];
        const cardFace = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        const deck = [];

        //LOOP THROUGH SUITS AND FACES AND PUSH TO DECK
        for (let i = 0; i < cardFace.length; i++) {
            for (let j = 0; j < cardSuit.length; j++) {
                deck.push(cardFace[i] + cardSuit[j]);
            }
        }   

        // SHUFFLE ARRAY OF CARDS AND SET TO STATE
        deck.sort((a, b) => 0.5 - Math.random());
        this.setState({deck});
    } // end shuffleCards()


    dealCards = () => {
        // DISPLAY FIRST FIVE CARDS TO USER
        const userHand = this.state.deck.splice(0,5);
        const userArray = [];
        userHand.forEach(i => userArray.push(i));

        console.log('new round: ' + userArray);

        // if (this.state.heldCards.length > 0) {
        //     for (let i = 0; i < userArray.length; i++) {
        //         if (userArray.indexOf(this.state.heldCards[i]) === 1) {
        //             userArray.splice(userArray[i], 1);
        //         }
        //     }
        // }

        // SET STATE OF USER HAND AND START ROUND
        if (!this.state.game) {
            this.setState({
                user: [...userArray],
                game: true,
                winPair: false,
                winStraight: false
            });
        }
        
    } // end dealCards()


    newHand = () => {
        // CHECK WHICH CARDS ARE HELD BY USER
        var holdArr = [this.state.card1, this.state.card2, this.state.card3, this.state.card4, this.state.card5];
        // console.log(holdArr);
        const heldCards = [];
        for(let i = 0; i < holdArr.length; i++) {
            const newCard = this.state.deck.splice(0, 1);
            // REMOVE CARD IF ITS STATE IS FALSE AND REPLACE WITH NEW CARD FROM DECK
            if (!holdArr[i]) {
                this.state.user.splice(i, 1, ...newCard);
            } else {
                heldCards.push(this.state.user[i])
            }
        }

        console.log('new hand: ' + this.state.user);

        // CHECK FOR A WIN
        this.check();

        // RESHUFFLE CARDS ONCE DECK IS LOW
            // TO PREVENT SAME CARD FROM LAST HAND TO APPEARING ON THE NEXT HAND
        if (this.state.deck.length < 5) {
            this.shuffleCards();

        }
        
        // REINITIALIZE STATE OF GAME AND HELD CARDS
        this.setState({ game: false, card1: false, card2: false, card3: false, card4: false, card5: false, heldCards });
    } // end newHand()


    toggleCard = id => {
        // STORE THE STATE OF TOGGLED CARDS IN THIS PARENT COMPONENT
            // TO KEEP TRACK OF WHICH CARDS TO KEEP OR REMOVE
            // **THIS IS DIFFERENT THAN MANAGING THE STATE OF EACH INDIVIDUAL CARD**
        if (this.state.game) {
            switch(id) {
                case 0:
                    this.setState({
                        card1: !this.state.card1
                    })
                    break;
                case 1:
                    this.setState({
                        card2: !this.state.card2
                    })
                break;
                case 2:
                    this.setState({
                        card3: !this.state.card3
                    })
                break;
                case 3:
                    this.setState({
                        card4: !this.state.card4
                    })
                break;
                case 4:
                    this.setState({
                        card5: !this.state.card5
                    })
                break;
                default:
                    return;
            }
        }
    } // end toggleCard()
    

    check = () => {
        // REMOVE VALUES FROM SUITS TO LOOK FOR
            // PAIRS OR STRAIGHT
        const faceArr = [];

        this.state.user.forEach(i => {
            let face = i.slice(0, -1);
            faceArr.push(parseInt(face));
            let suit = i.slice(i.length - 1);
        });

        // SORT THE ARRAY OF NUMBER VALUES AND CHECK FOR A PAIR(S)
        const checkStraight = faceArr.sort((a, b) => a - b);
        // console.log(checkStraight);

        let isPair = false;
        let isStraight = false;

        for (let i = 0; i < checkStraight.length; i++) {
            if (checkStraight[i] === checkStraight[i + 1]) {
                isPair = true;
                console.log('pair!');
            };
        };

        if (isPair) {
            const score = this.state.score += 100;
            this.setState({score, winPair: true});
            isPair = false;
        };

        // HARD-CODED TO CHECK FOR A STRAIGHT
        if ((checkStraight[0] + checkStraight[2]) / 2 === checkStraight[1] &&
            (checkStraight[1] + checkStraight[3]) / 2 === checkStraight[2] &&
            (checkStraight[2] + checkStraight[4]) / 2 === checkStraight[3] &&
            checkStraight[4] === (checkStraight[3] + 1)) {
                isStraight = true;
                console.log('straight!');
        };
   
        if (isStraight) {
            const score = this.state.score += 500;
            this.setState({score, winStraight: true});
            isStraight = false;
        };
    } // end check()


  render() {
      const { user, game, score, win, winPair, winStraight, winPairMsg, winStraightMsg } = this.state;
    return (
      <div>
          <Score 
            score={score}
            game={game}
            win={win}
            winPair={winPair}
            winStraight={winStraight}
            winPairMsg={winPairMsg}
            winStraightMsg={winStraightMsg} />
        <User 
            userCards={user}
            game={game} 
            toggleCard={this.toggleCard}/>
        
        <Table 
            game={game} 
            dealCards={this.dealCards}
            newHand={this.newHand}
            />
      </div>
    )
  }
}
