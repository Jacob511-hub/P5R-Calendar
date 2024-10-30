import React, { useState } from 'react';
import { useEffect } from 'react';
import Divider from '@mui/material/Divider';

const Info = ({ dateDisplay, weekdayDisplay, activityStartDisplay, activityDisplayDay, activityDisplayNight, activityDisplayAuto }) => {
    console.log(activityDisplayNight)
    return (
        <div className="info-container">
            <img
                className="dagger"
                src="src/assets/dagger.png">
            </img>
            <div className="info-display">
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
                {activityDisplayAuto.length > 0 ? (
                <>
                    <h1 id="auto-header">Auto</h1>
                    <Divider variant="middle" 
                        style={{
                            borderColor: 'white',
                        }}
                    />
                    <ul style={{listStyleType: 'none', padding: 0, margin: 0}}>
                    {activityDisplayAuto.map((name, index) => (
                        <h2 key={index}>{name}</h2>
                    ))}
                    </ul>
                    <Divider variant="middle" 
                        style={{
                            borderColor: 'white',
                        }}
                    />
                </>
                ) : (
                    <p></p>
                )}
                {activityDisplayDay.length > 0 ? (
                <>
                    <h1 id="day-header">Day</h1>
                    <Divider variant="middle" 
                        style={{
                            borderColor: 'white',
                        }}
                    />
                    <ul style={{listStyleType: 'none', padding: 0, margin: 0}}>
                    {activityDisplayDay.map((name, index) => (
                        <h2 key={index}>{name}</h2>
                    ))}
                    </ul>
                    <Divider variant="middle" 
                        style={{
                            borderColor: 'white',
                        }}
                    />
                </>
                ) : (
                    <p></p>
                )}
                {activityDisplayNight.length > 0 ? (
                <>
                    <h1 id="night-header">Night</h1>
                    <Divider variant="middle" 
                        style={{
                            borderColor: 'white',
                        }}
                    />
                    <ul style={{listStyleType: 'none', padding: 0, margin: 0}}>
                    {activityDisplayNight.map((name, index) => (
                        <h2 key={index}>{name}</h2>
                    ))}
                    </ul>
                    <Divider variant="middle" 
                        style={{
                            borderColor: 'white',
                        }}
                    />
                </>
                ) : (
                    <p></p>
                )}
            </div>
        </div>
    )
}

export default Info;