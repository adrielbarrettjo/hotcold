import React from 'react';

import './new-game-header.css';

export default function NewGameHeader(props) {
  return (
    <header>
      <nav>
       <ul className="clearfix">
		    <li>
		        <a
		            className="new"
		            onClick={() => props.onRestartGame()}
		            onRestartGame={() => props.onRestartGame()}
		          	>+ New Game</a>
	        </li>
          </ul>
      </nav>
      <h1>HOT or COLD</h1>
    </header>
  );
}