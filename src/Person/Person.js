import React from 'react';
import './Person.css';

const person = (props) => {
return (
    <div className="Person">
    <p>I am a person!! My name is {props.name} and I am {props.age} years old</p>
    <p onClick={props.click}>{props.children}</p>
    <input type="text" onChange={props.change} value={props.name}/>
    </div>
)
};

export default person;