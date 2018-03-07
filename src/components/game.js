import React from 'react';

import NewGameHeader from './new-game-header';
import Feedback from './hot-box';
import GuessForm from './guess-form';
import StatusSection from './status-section';

export default class Game extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      feedback: 'Make your guess!',
      correctAnswer: Math.round(Math.random() * 100) + 1
    };
  }

	//restartGame = (arg1, arg2) => { . }
	 restartGame() {
	    this.setState({
	      guesses: [],
	      feedback: 'Make your guess!',
	      auralStatus: '',
	      correctAnswer: Math.floor(Math.random() * 100) + 1
	    });
	  }  

	  makeGuess(guess) {
	  	guess = parseInt(guess, 10);
	  	if (isNaN(guess)) {
	  		this.setState({feedback: 'Please enter a valid number'});
	  		return;
	  	}
	  

	  const difference = Math.abs(guess - this.state.correctAnswer )

	  let feedback;
	  if (difference >= 50) {
	  	feedback = 'Ice Cold...';
	  } else if (difference >= 30) {
      feedback = 'Cold...';
    } else if (difference >= 10) {
      feedback = 'Warm.';
    } else if (difference >= 1) {
      feedback = 'Hot!';
    } else {
      feedback = 'You got it!';
    }

    this.setState({
      feedback,
      guesses: [...this.state.guesses, guess]
    });
} //end of makeGuess

	render () {
    	const guessCount = this.state.guesses.length;

		return (
			<div>
				<NewGameHeader
					onRestartGame={() => this.restartGame()}/>
				<Feedback 
					feedback={this.state.feedback}
					guessCount={this.props.guessCount} />
				
				<GuessForm
		            guessCount={guessCount}
		            onMakeGuess={guess => this.makeGuess(guess)}/>
				<StatusSection
					guesses={this.state.guesses} />
			</div>
	) 
	} 


} // end Game Component