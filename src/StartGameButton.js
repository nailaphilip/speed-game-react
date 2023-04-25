import React from 'react';

function StartGameButton(props) {
  return (
    <button onClick={props.onClick}>
      Start Game
    </button>
  );
}

export default StartGameButton;