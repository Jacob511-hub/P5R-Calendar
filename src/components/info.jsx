import React from 'react';
import InfoBox from './infoBox';
import { useInfo } from '../components/CalendarContext';

const Info = () => {
    const {
        dateDisplay,
        weekdayDisplay,
        activityStartList,
        activityListDay,
        activityListNight,
        activityListAuto,
        activityListDates,
        dateAvailability,
      } = useInfo();

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
                <InfoBox headerText="Start" activityData={activityStartList} dateAvailability={dateAvailability} />
                <InfoBox headerText="Auto" activityData={activityListAuto} dateAvailability={dateAvailability} />
                <InfoBox headerText="Day" activityData={activityListDay} dateAvailability={dateAvailability} />
                <InfoBox headerText="Night" activityData={activityListNight} dateAvailability={dateAvailability} />
                <InfoBox headerText="Dates" activityData={activityListDates} dateAvailability={dateAvailability} />
            </div>
        </div>
    )
}

export default Info;