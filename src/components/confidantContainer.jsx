import React from 'react';
import { activityClick } from '../hooks/handleClick.js';
import ConfidantRank from './ConfidantRank.jsx';

const ConfidantContainer = ({tarot, name}) => {
    const {clicked, handleClick} = activityClick(name);

    return (
        <div className="confidant-container" onClick={handleClick}>
            <img
                className="tarot"
                src={tarot}>
            </img>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 'auto',
                marginRight: 'auto',
            }}>
                <h1 className="confidant-name">{name}</h1>
                <ConfidantRank />
            </div>
        </div>
    );
}

export default ConfidantContainer;