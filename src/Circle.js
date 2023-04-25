import React from "react";
import "./Circle.css";

const Circle = (props) => {
  return (
    <div className="circle" onClick={props.click}>
      <p>{props.number}</p>
    </div>
  );
};

export default Circle;
