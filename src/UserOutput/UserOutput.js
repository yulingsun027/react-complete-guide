import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>Ask {props.name}: what have I learned today?</p>
            <p>{props.reading} is a great book, highly recommended. Deep thoughts in wistful words that travlled through time</p>
            <p onClick={props.click}>{props.children}</p>
        </div>
    )
};

export default userOutput;