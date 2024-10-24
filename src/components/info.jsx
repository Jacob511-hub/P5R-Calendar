import React, { useState } from 'react';
import { useEffect } from 'react';

const Info = ({ dateDisplay, weekdayDisplay, activityDisplay }) => {
    return (
        <div className="info-display">
            <img
                className="dagger"
                src="src/assets/dagger.png">
            </img>
            <h1 id="date-display">{dateDisplay}</h1>
            <h1 id="weekday-display">{weekdayDisplay}</h1>
            {activityDisplay.length > 0 ? (
                <ul style={{listStyleType: 'none', padding: 0, margin: 0}}>
                {activityDisplay.map((name, index) => (
                    <h2 key={index}>{name}</h2>
                ))}
                </ul>
            ) : (
                <p></p>
            )}
        </div>
    )
}

export default Info;