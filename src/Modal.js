import React from "react";
import "./Modal.css";

const Modal = (props) => {
  return (
    <div>
      <div className="overlay">
        <div className="modal">
          <p>Ups, game over!</p>
          <p>
            Your score was <span className="scoreEnd">{props.score}</span>
          </p>
          <button onClick={props.close}>x</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
