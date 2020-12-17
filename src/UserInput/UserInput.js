import React from 'react';

const userInput = (props) => {
    return (
        <div>
            <p>Please type in something crazy and random below!</p>
            <input type='text'/>
            <p>The length of your input is : {props.change}</p>
        </div>
    )
};

export default userInput;
