import React from 'react';
import daggerImage from '../assets/dagger.png';
import InfoBox from './infoBox';
import DetailsBox from './detailsBox';
import BookDVDGameInfo from './BookDVDGameInfo';
import JobsInfo from './JobsInfo';
import CrosswordDatesInfo from './CrosswordDatesInfo';
import CrosswordSolutionsInfo from './CrosswordSolutionsInfo'
import { useInfo } from '../components/CalendarContext';
import LeblancInfo from './LeblancInfo';
import CrosswordAvailable from './CrosswordAvailable';
import TVQuizInfo from './TVQuizInfo';
import HomeShoppingInfo from './HomeShoppingInfo';

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
        activityDetails,
    } = useInfo();

    return (
        <div className="info-container">
            <img
                className="dagger"
                src={daggerImage}>
            </img>
            <div className="info-display">
                <div className="info-header-container"
                style={{
                    display: dateDisplay === "" && weekdayDisplay === "" ? "none" : "block",
                }}
                >
                    <h1 id="date-display">{dateDisplay}</h1>
                    <h1 id="weekday-display">{weekdayDisplay}</h1>
                </div>
                <DetailsBox headerImg={'url("src/assets/details.png")'} details={activityDetails}></DetailsBox>
                <InfoBox headerText="Start" activityData={activityStartList} dateAvailability={dateAvailability} />
                <InfoBox headerText="End" activityData={activityEndList} dateAvailability={dateAvailability} />
                <InfoBox headerText="Auto" activityData={activityListAuto} dateAvailability={dateAvailability} />
                <InfoBox headerText="Day" activityData={activityListDay} dateAvailability={dateAvailability} />
                <InfoBox headerText="Night" activityData={activityListNight} dateAvailability={dateAvailability} />
                <InfoBox headerText="Start Date" activityData={activityStartDate} dateAvailability={dateAvailability} />
                <InfoBox headerText="End Date" activityData={activityEndDate} dateAvailability={dateAvailability} />
                <InfoBox headerText="Dates" activityData={activityListDates} dateAvailability={dateAvailability} />
                <CrosswordAvailable></CrosswordAvailable>

                <BookDVDGameInfo></BookDVDGameInfo>
                <JobsInfo></JobsInfo>
                <CrosswordDatesInfo></CrosswordDatesInfo>
                <CrosswordSolutionsInfo></CrosswordSolutionsInfo>
                <LeblancInfo></LeblancInfo>
                <HomeShoppingInfo></HomeShoppingInfo>
                <TVQuizInfo></TVQuizInfo>
            </div>
        </div>
    )
}

export default Info;