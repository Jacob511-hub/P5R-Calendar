import React from 'react';
import daggerImage from '../assets/dagger.png';
import InfoBox from './infoBox';
import { useInfo } from '../components/CalendarContext';
import AccordionCustom from './accordionCustom';
import DetailsBox from './detailsBox';

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
        activityStartDate,
        activityEndDate,
        activityEndList,
        activityDetails
    } = useInfo();

    return (
        <div className="info-container">
            <img
                className="dagger"
                src={daggerImage}>
            </img>
            <div className="info-display">
                <div className="info-date">
                    <h1 id="date-display">{dateDisplay}</h1>
                    <h1 id="weekday-display">{weekdayDisplay}</h1>
                </div>
                {/* <AccordionCustom headerImg={'url("src/assets/details.png")'} renderContent={() => (<h2 style = {{padding: 0, margin: 0}}>{activityDetails}</h2>)}></AccordionCustom> */}
                <DetailsBox headerImg={'url("src/assets/details.png")'} details={activityDetails}></DetailsBox>
                <InfoBox headerText="Start" activityData={activityStartList} dateAvailability={dateAvailability} />
                <InfoBox headerText="End" activityData={activityEndList} dateAvailability={dateAvailability} />
                <InfoBox headerText="Auto" activityData={activityListAuto} dateAvailability={dateAvailability} />
                <InfoBox headerText="Day" activityData={activityListDay} dateAvailability={dateAvailability} />
                <InfoBox headerText="Night" activityData={activityListNight} dateAvailability={dateAvailability} />
                <InfoBox headerText="Start Date" activityData={activityStartDate} dateAvailability={dateAvailability} />
                <InfoBox headerText="End Date" activityData={activityEndDate} dateAvailability={dateAvailability} />
                <InfoBox headerText="Dates" activityData={activityListDates} dateAvailability={dateAvailability} />
            </div>
        </div>
    )
}

export default Info;