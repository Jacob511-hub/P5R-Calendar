import React from 'react';
import { dateClick } from '../hooks/handleClick.js';

const ConfidantContainer = ( {tarot, name, onClick, activitiesUpdate} ) => {

    const {clicked, handleClick} = dateClick(0, 0, name, onClick, activitiesUpdate);

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