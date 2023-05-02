import React from "react";
import "./Circle.css";

const Circle = (props) => {
  return (
    <div
      onClick={props.click}
      className={props.active ? "circleactive" : "circle"}
      style={{ pointerEvents: props.gameStatus ? "all" : "none" }}
    >
      <p>{props.number}</p>
    </div>
  );
};

export default Circle;
