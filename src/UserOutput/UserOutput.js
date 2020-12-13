import React from 'react';

const userOutput = (props) => {
    const style = {
        width: '20%',
        margin: '16px auto',
        border: '2px solid #eee',
        boxShadow: '0 2px 3px #ccc',
        padding: '16px',
        textAlign: 'center',
        backgroundColor: '#F0F8FF'
    }

    return (
        <div style={style}>
            <p>Hello, <b>{props.username}</b></p>
            <p>Welcome to Sobu High School!</p>
        </div>
    )
};

export default userOutput;