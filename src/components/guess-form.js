import React from 'react';
import './guess-form.css';

export default class GuessForm extends React.Component {
	onSubmit(event) {
		event.preventDefault();
	}

	render () {
		//const stuff = maybe

		return (
			<form onSubmit={e => this.onSubmit(e)}>
				<input type="number"
			          name="userGuess"
			          id="userGuess"
			          className="text"
			          min="1"
			          max="100"
			          autoComplete="off"
			          aria-labelledby="feedback"
			          ref={input => (this.input = input)}
			          required/>
				<button type="submit"
				          name="submit"
				          id="guessButton" 
				          className="button"> Guess </button>
			</form>


	) // end of return
	} // end of render


} // end GuessForm Component

