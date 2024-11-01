import React from 'react';
import InfoBox from './infoBox';

const Info = ({
    dateDisplay,
    weekdayDisplay,
    activityStartDisplay,
    activityDisplayDay,
    activityDisplayNight,
    activityDisplayAuto,
    activityDisplayDates,
    dateAvailability,
}) => {
    console.log(dateAvailability)
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
                <InfoBox headerText="Start" activityData={activityStartDisplay} dateAvailability={dateAvailability} />
                <InfoBox headerText="Auto" activityData={activityDisplayAuto} dateAvailability={dateAvailability} />
                <InfoBox headerText="Day" activityData={activityDisplayDay} dateAvailability={dateAvailability} />
                <InfoBox headerText="Night" activityData={activityDisplayNight} dateAvailability={dateAvailability} />
                <InfoBox headerText="Dates" activityData={activityDisplayDates} dateAvailability={dateAvailability} />
            </div>
        </div>
    )
}

export default Info;