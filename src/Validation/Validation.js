import React from 'react';

const validation = (props) => {
    // if (prop.length >=5) {
    //     return <p>The input is long enough yaoooo!</p>
    // } else {
    //     return <p>The input is not long enough please continue yaoooooo!</p>
    // }
    let valicationMessage = "text too long";
    if (props.length <=5){
        valicationMessage = "text too short"
    }

    return (
        <div>
            <p>{valicationMessage}</p>
        </div>
    )
};

export default validation;