import React, { Component } from 'react';

import Table from './components/Table';
import User from './components/User';
import Score from './components/Score';


export default class AppContainer extends Component {
    state = {
        game: false,
        score: 0,
        user: [],
        card1: false,
        card2: false,
        card3: false,
        card4: false,
        card5: false
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

        // SHUFFLE ARRAY OF CARDS AND SET STATE
        deck.sort((a, b) => 0.5 - Math.random());
        this.setState({deck})
    }

    dealCards = () => {
        // DISPLAY FIRST FIVE CARDS TO USER
        const userHand = this.state.deck.splice(0,5);
        const userArray = [];
        userHand.forEach(i => {
            // userArray.push([i, false]);
            userArray.push(i);
        })

        console.log(userArray);
        // SET STATE OF USER HAND AND START GAME
        this.setState({
            user: [...userArray],
            game: true 
        })
    }

    newHand = () => {
        console.log('new hand');
        this.shuffleCards();
        

        this.setState({
            game: false,
            card1: false,
            card2: false,
            card3: false,
            card4: false,
            card5: false
        })

        // CHECK WHICH CARDS ARE HELD BY USER
        var holdArr = [this.state.card1, this.state.card2, this.state.card3, this.state.card4, this.state.card5];
        console.log(holdArr);

        for(let i = 0; i < holdArr.length; i++) {
            const newCard = this.state.deck.splice(0, 1);
            // REMOVE CARD IF ITS STATE IS FALSE
            if (!holdArr[i]) {
                // console.log(i);
                this.state.user.splice(i, 1, ...newCard);
            }
        }

        console.log(this.state.user);

        // CHECK FOR A WIN
        this.check();
    }

    // toggleCard = card => {
    //     this.state.user.forEach(i => {
    //         if (i[0] === card[0]) {
    //             i[1] = !i[1];
    //             console.log(i[1]);

    //         }
    //     })
    //     console.log(card);
       
    // }

    // toggleCard = id => {
    //     console.log(id);
    //     const array = [false, false, false, false, false];

    //     for (let i = 0; i < array.length; i++) {
    //         if (i === id) {
    //             console.log(i);
    //             array[i] = !array[i];
    //         } 
    //     }

    //     console.log(array);
    // }

    toggleCard = id => {
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
            }
        }
    }
    
    check = () => {

        // REMOVE VALUES FROM SUITS TO LOOK FOR
            // PAIRS OR STRAIGHT
        const faceArr = [];

        this.state.user.forEach(i => {
            let face = i.slice(0, -1);
            faceArr.push(face);
            let suit = i.slice(i.length - 1);
        });

        // SORT THE ARRAY OF NUMBER VALUES AND CHECK FOR DUPLICATES
        const checkStraight = faceArr.sort((a, b) => a - b);
        for (let i = 0; i < checkStraight.length; i++) {
            if (checkStraight[i] === checkStraight[i + 1]) {
                console.log('pair!');

                // UPDATE SCORE
                const score = this.state.score += 100;
                this.setState({score})
            }
        }
    }


  render() {
    return (
      <div>
        <Score 
            score={this.state.score}
        />
        <Table 
            dealCards={this.dealCards}
            newHand={this.newHand}
            game={this.state.game}
            />
        <User 
            userCards={this.state.user}
            toggleCard={this.toggleCard}
            holdCard={this.holdCard}
            game={this.state.game}
        />
      </div>
    )
  }
}
