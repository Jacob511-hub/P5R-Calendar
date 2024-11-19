import React from 'react';
import { activityClick } from '../hooks/handleClick.js';

const ConfidantContainer = ({tarot, name}) => {
    const {clicked, handleClick} = activityClick(name);

    return (
        <div className="confidant-container" onClick={handleClick}>
            <img
                className="tarot"
                src={tarot}>
            </img>
            <h1 className="confidant-name">{name}</h1>
        </div>
    );
}

export default ConfidantContainer;