import React from 'react';
import GuessList from './guess-list';
import GuessCount from './guess-count';

export default class StatusSection extends React.Component {

	render () {
		const { guesses, auralStatus } = this.props;
  		const guessCount = guesses.length;

		return (
			<div>
				 <GuessCount guessCount={guessCount} />
	     		 <GuessList guesses={guesses} />
			</div>


	) // end of return
	} // end of render
} // ends greenbox component