import React from 'react';

const char = ( props ) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black',
        cursor: 'crosshair'
    }
    return (
        <span onClick={props.click} style={style}>{props.value}</span>
    )
}

export default char;