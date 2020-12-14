import React from 'react';
import './Validation.css';

const validation = ( props ) => {
    let result = "Please input anything...";
    const inputLength = props.length;

    if ( inputLength ) {
        if ( inputLength < 8  ) {
            result = "Text too short!";
        } else {
            result = "Text long enough!";
        }
    }
    
    return (
        <p className="Validation">{result}</p>
    )
}

export default validation;