import React from 'react';
import { activityClick } from '../hooks/handleClick.js';
import ConfidantRank from './ConfidantRank.jsx';

const ConfidantContainer = ({tarot, name, item, toggleRank}) => {
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
                <ConfidantRank rank={item.rank} name={name} toggleRank={toggleRank} />
            </div>
        </div>
    );
}

export default ConfidantContainer;