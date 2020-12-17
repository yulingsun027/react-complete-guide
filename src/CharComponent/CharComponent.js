import React from 'react';
import './CharComponent.css'

const charComponent = (props) =>{
    return (
    <div className="CharComponent"  onClick={props.clicked}>
        <p>{props.character}</p>
    </div>
    )
}



export default charComponent;