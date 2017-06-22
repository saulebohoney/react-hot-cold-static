import React from 'react';
import Header from './header/header.js';
import GuessSection from './guess-section/guess-section.js';
import GuessCount  from './guess-count/guess-count.js';
import GuessList from './guess-list/guess-list.js';

export default class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      correctAnswer: 3,
      guessedSoFar: [0, 15, 18],
      guessCount: 0,
      feedback: "Make your guess!"
    }
  }

  handleGuessCount(){
    const guessCount = this.state.guessedSoFar.length;
    this.setState({
      guessCount
    })
  }

  handleNewGuess(guess){
    const newGuessArray = [...this.state.guessedSoFar, guess];
    handleIsValid(guess);
    this.setState({
      guessedSoFar: newGuessArray
    })
    this.handleGuessCount();
  }


 handleIsValid(guess){
   const guessLength = guess.split('').length;
   const guessedSoFar = this.state.guessedSoFar;
   const isGuessed = guessedSoFar.includes(guess);
     if(typeof(guess) !== 'Number'){
           return "It need to be the number!"
       }

    if (guessLength > 2){
       return "It needs to be between 1 and 99!"
      }
    }
   
     if (isGuessed) {
       return  "You have already guessed that!"
     }

}
  handleRandomNumber(){
    const newNumber = Math.floor(Math.random() * (1 - 99));
    this.setState({
      correctAnswer: newNumber
    })
  }

  handleFeedback(guess){
    const guessDistance = Math.abs(this.state.correctAnswer - guess);
    if(guessDistance === 0){
      return "You got!"
    }else  if (guessDistance <= 5){
       return "Super Hot!"
     } else if(guessDistance <=15){
       return "You are getting warmer!"
     }else if (guessDistance <=25){
       return "Cold!"
     }else if (guessDistance <= 99){
       return "You are in the Artic!"
     }
  }

  // newGame(){
  //   handleRandomNumber();
  // }

  // componentDidMount(){
  //   newGame();
  // }

  render(){
    return (
        <div>
            <Header />
            <GuessSection feedback={this.state.feedback} onValue={(value)=> this.handleNewGuess(value)}/>
            <GuessCount count={this.state.guessCount} />
            <GuessList guesses={this.state.guessedSoFar} />
        </div>
    );
  }
}

