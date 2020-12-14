import React from 'react';
import './Profile.css'

const profile = (props) => {
    const style = {
        display: 'block',
        margin: '12px auto -5px auto',
    };

    return (
        <div className='Profile'>
            <h3>Hello, my name's {props.name}</h3>
            <p><b>Gender:</b> {props.gender}</p>
            <p><b>My occupation:</b> {props.job}</p>
            <input onChange={props.changed} value={props.name} />
            <button style={style} onClick={props.click}>Delete Profile</button>
        </div>
    )
};

export default profile;