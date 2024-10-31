import React from 'react';
import InfoBox from './infoBox';

const Info = ({ dateDisplay, weekdayDisplay, activityStartDisplay, activityDisplayDay, activityDisplayNight, activityDisplayAuto, activityDisplayDates }) => {
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
                <InfoBox headerText="Start" activityData={activityStartDisplay} />
                <InfoBox headerText="Auto" activityData={activityDisplayAuto} />
                <InfoBox headerText="Day" activityData={activityDisplayDay} />
                <InfoBox headerText="Night" activityData={activityDisplayNight} />
                <InfoBox headerText="Dates" activityData={activityDisplayDates} />
            </div>
        </div>
    )
}

export default Info;