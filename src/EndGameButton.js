import React from 'react';

function EndGameButton(props) {
  return (
    <button onClick={props.onClick}>
      End Game
    </button>
  );
}

export default EndGameButton;