import React from "react";
import Header from "./header/header.js";
import GuessSection from "./guess-section/guess-section.js";
import GuessCount from "./guess-count/guess-count.js";
import GuessList from "./guess-list/guess-list.js";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      correctAnswer: 3,
      guessedSoFar: [],
      guessCount: 0,
      feedback: "Make your guess!"
    };
  }

  handleNewGuess(guess) {
    const newGuessArray = [...this.state.guessedSoFar, guess];
    const newGuessArrayLength = newGuessArray.length;

    this.setState({
      guessedSoFar: newGuessArray,
      guessCount: newGuessArrayLength
    });
  }

  handleIsValid(guess) {
    const guessLength = guess.split("").length;
    const guessedSoFar = this.state.guessedSoFar;
    const isGuessed = guessedSoFar.includes(guess);
    const guessDistance = Math.abs(this.state.correctAnswer - guess);
    if (isNaN(guess)) {
      return "It needs to be the number!";
    }

    if (guessLength > 2) {
      return "It needs to be between 1 and 99!";
    }

    if (isGuessed) {
      return "You have already guessed that!";
    }
    this.handleNewGuess(guess);
    if (guessDistance === 0) {
      return "You got it! Click the New Game button to play again.";
    } else if (guessDistance <= 5) {
      return "Super Hot!";
    } else if (guessDistance <= 15) {
      return "You are getting warmer!";
    } else if (guessDistance <= 25) {
      return "Cold!";
    } else if (guessDistance <= 99) {
      return "You are in the Artic!";
    }
  }
  
  handleRandomNumber() {
    const newNumber = Math.abs(Math.floor(Math.random() * (1 - 99)));
    this.setState({
      correctAnswer: newNumber
    });
  }

  handleSetState(guess) {
    const feedback = this.handleIsValid(guess);
    console.log(feedback);
    this.setState({
      feedback
    });
  }

  newGame(){
    this.handleRandomNumber();
    this.setState({
      guessedSoFar: [],
      guessCount: 0,
      feedback: 'Make your guess!'
    })
  }

  componentDidMount(){
    this.handleRandomNumber();
  }

  render() {
    return (
      <div>
        <Header newGame={()=> this.newGame()} />
        <GuessSection
          feedback={this.state.feedback}
          onValue={value => this.handleSetState(value)}
        />
        <GuessCount count={this.state.guessCount} />
        <GuessList guesses={this.state.guessedSoFar} />
      </div>
    );
  }
}
