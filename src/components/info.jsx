import React, { useState } from 'react';
import { useEffect } from 'react';
import Divider from '@mui/material/Divider';

const Info = ({ dateDisplay, weekdayDisplay, activityStartDisplay, activityDisplay }) => {
    return (
        <div className="info-display">
            <img
                className="dagger"
                src="src/assets/dagger.png">
            </img>
            <div className="info-date">
                <h1 id="date-display">{dateDisplay}</h1>
                <h1 id="weekday-display">{weekdayDisplay}</h1>
            </div>
            {activityStartDisplay.length > 0 ? (
                <>
                    <h1 id="start-header">Start</h1>
                    <Divider variant="middle" 
                        style={{
                            borderColor: 'white',
                        }}
                    />
                    {activityStartDisplay.length > 0 ? (
                        <ul style={{listStyleType: 'none', padding: 0, margin: 0}}>
                        {activityStartDisplay.map((name, index) => (
                            <h2 key={index}>{name}</h2>
                        ))}
                        </ul>
                    ) : (
                        <p></p>
                    )}
                    <Divider variant="middle" 
                        style={{
                            borderColor: 'white',
                        }}
                    />
                </>
            ) : (
                <p></p>
            )}
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