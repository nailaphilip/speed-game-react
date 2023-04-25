import React from 'react';
import './Modal.css';

const Modal = () => {
    return (
        <div>
            <div className="overlay">
            <div className="modal">
          <p>Ups, game over!</p>
          <p>Your score was <span class="scoreEnd">0</span></p>
          <button id="close">close</button>
        </div>
      </div>
        </div>
    );
};

export default Modal;