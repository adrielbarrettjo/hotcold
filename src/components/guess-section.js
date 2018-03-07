import React from 'react';

import Feedback from './hot-box';
import GuessForm from './guess-form';

export default function GuessSection(props) {
  const { feedback, guessCount } = props;
  return (
    <section >
      <Feedback feedback={feedback} guessCount={guessCount} />
      <GuessForm onMakeGuess={guess => props.onMakeGuess(guess)} />
    </section>
  );
}