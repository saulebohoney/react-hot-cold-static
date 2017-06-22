import React from "react";
import "./guess-form.css";

export default class GuessForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          ref={input => (this.input = input)}
          name="userGuess"
          id="userGuess"
          className="text"
          maxLength="3"
          autoComplete="off"
          placeholder="Enter your Guess"
          required
        />
        <input
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            this.props.onValue(this.input.value);
          }}
          id="guessButton"
          className="button"
          name="submit"
          value="Guess"
        />
      </form>
    );
  }
}
