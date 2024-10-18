import React, { useState } from 'react';
import ConfidantContainer from './confidantContainer';
import { tarot, tarotNames } from '../hooks/confidantassets';

const Activities = () => {
    return (
        <div className="activities-container">
            <img
                className="dagger"
                src="src/assets/dagger.png">
            </img>
            <div className="activities-display">
                <img src="src/assets/confidants.png"></img>
                {Array.from({ length: tarot.length }).map((_, index) => (
                    <ConfidantContainer 
                        key={index}
                        tarot={tarot[index]}
                        name={tarotNames[index]}
                    />
                ))}
            </div>
        </div>
    )
}

export default Activities;