import React, { useState } from 'react';
import ConfidantContainer from './confidantContainer';
import { tarot, tarotNames } from '../hooks/confidantassets';

const Activities = () => {
    return (
        <div className="activities-display">
            <div>
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