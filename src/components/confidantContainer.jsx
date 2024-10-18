import React from 'react';

const ConfidantContainer = ( {tarot, name} ) => {
    return (
        <div className="confidant-container">
            <img
                className="tarot"
                src={tarot}>
            </img>
            <h1 className="confidant-name">{name}</h1>
        </div>
    );
}

export default ConfidantContainer;