import React from 'react';
import './Profile.css'

const profile = (props) => {
    return (
        <div className='Profile'>
            <h3>Hello, my name's {props.name}</h3>
            <p><b>Gender:</b> {props.gender}</p>
            <p><b>My occupation:</b> {props.job}</p>
            <input onChange={props.changed} value={props.name} />
        </div>
    )
};

export default profile;