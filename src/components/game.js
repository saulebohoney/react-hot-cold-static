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
    this.setState({
      guessedSoFar: newGuessArray
    })
    this.handleGuessCount();
  }

  handleRandomNumber(){
    const newNumber = Math.floor(Math.random() * (1 - 99));
    this.setState({
      correctAnswer: newNumber
    })
  }

  // handleFeedback(guess){
  //   if(guess is in this.state.guessedSoFar){
  //     setState({
  //       feedback: "You've guessed that!"
  //     })
  //   }
  //   const guessDistance = this.state.correctAnswer - guess;

  // }

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

