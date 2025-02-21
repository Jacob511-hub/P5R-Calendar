import React from 'react';
import daggerImage from '../assets/dagger.png';
import InfoBox from './infoBox';
import ConfidantDetailsModal from './ConfidantDetailsModal';
import BookDVDGameInfo from './BookDVDGameInfo';
import JobsInfo from './JobsInfo';
import CrosswordDatesInfo from './CrosswordDatesInfo';
import CrosswordSolutionsInfo from './CrosswordSolutionsInfo'
import { useInfo } from '../components/CalendarContext';
import LeblancInfo from './LeblancInfo';
import CrosswordAvailable from './CrosswordAvailable';
import HomeShoppingAvailable from './HomeShoppingAvailable';
import TVQuizAvailable from './TVQuizAvailable';
import ClassroomQuestionAvailable from './ClassroomQuestionAvailable';
import ExamAvailable from './ExamAvailable';
import TrainReadAvailable from './TrainReadAvailable';
import ChalkDodgeAvailable from './ChalkDodgeAvailable';
import SlackOffAvailable from './SlackOffAvailable';
import TVQuizInfo from './TVQuizInfo';
import HomeShoppingInfo from './HomeShoppingInfo';
import ClassroomInfo from './ClassroomInfo';
import FacilitiesInfo from './FacilitiesInfo';

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
        confidantChoices,

        confidants,
    } = useInfo();

    let title = "";

    if (dateDisplay === "Hierophant") {
        title = "Hiero";
    }
    else if (dateDisplay === "Hanged Man") {
        title = "Hanged";
    }
    else if (dateDisplay === "Temperance") {
        title = "Temp";
    }
    else if (dateDisplay === "Judgement") {
        title = "Judge";
    }
    else if (dateDisplay === "Councillor") {
        title = "Council";
    }
    else {
        title = dateDisplay;
    }

    return (
        <div className="info-container">
            <img
                className="dagger"
                src={daggerImage}>
            </img>
            <div className="info-display">
                <div className="info-header-container"
                style={{
                    display: title === "" && weekdayDisplay === "" ? "none" : "block",
                }}
                >
                    <h1 id="date-display">{title}</h1>
                    {weekdayDisplay && <h1 id="weekday-display">{weekdayDisplay}</h1>}
                </div>
                <ConfidantDetailsModal details={activityDetails} choices={confidantChoices} confidants={confidants}/>
                <InfoBox headerText="Start" activityData={activityStartList} dateAvailability={dateAvailability} />
                <InfoBox headerText="End" activityData={activityEndList} dateAvailability={dateAvailability} />
                <InfoBox headerText="Auto" activityData={activityListAuto} dateAvailability={dateAvailability} />
                <InfoBox headerText="Day" activityData={activityListDay} dateAvailability={dateAvailability} />
                <InfoBox headerText="Night" activityData={activityListNight} dateAvailability={dateAvailability} />
                <InfoBox headerText="Start Date" activityData={activityStartDate} dateAvailability={dateAvailability} />
                <InfoBox headerText="End Date" activityData={activityEndDate} dateAvailability={dateAvailability} />
                <InfoBox headerText="Dates" activityData={activityListDates} dateAvailability={dateAvailability} />
                <CrosswordAvailable />
                <HomeShoppingAvailable />
                <TVQuizAvailable />
                <ClassroomQuestionAvailable />
                <ExamAvailable />
                <TrainReadAvailable />
                <ChalkDodgeAvailable />
                <SlackOffAvailable />

                <BookDVDGameInfo />
                <JobsInfo />
                <CrosswordDatesInfo />
                <CrosswordSolutionsInfo />
                <LeblancInfo />
                <HomeShoppingInfo />
                <TVQuizInfo />
                <ClassroomInfo />
                <FacilitiesInfo />
            </div>
        </div>
    )
}

export default Info;