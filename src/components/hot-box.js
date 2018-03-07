import React from 'react';

import './hot-box.css';

export default class Feedback extends React.Component{
	constructor(props) {
		super(props);
		this.state = {};

	}

	render () {
	const key = this.props.guessCount;
	let guessAgain;
	if (key!==0) {
		guessAgain = <span >Guess again!</span>;
	}

		return (
			<h2 key = {key} id="feedback">
				{this.props.feedback} {guessAgain}
			</h2>

	) // end of return
	}

} // end GuessForm Component
