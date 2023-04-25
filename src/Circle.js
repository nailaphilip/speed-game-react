import React from 'react';
import './Circle.css';

const Circle = (props) => {
    return (
            <div class="circle" onClick={props.click}><p>{props.number}</p></div>
    );
};

export default Circle;


      
    