import { useState } from 'react';
import {
    searchByDate,
    searchByExtraDate,
    searchByStartDate,
    searchByEndDate,
    searchByActivity,
    searchByWeekday,
    searchStartDateByActivity,
    searchEndDateByActivity,
    searchDetailsByActivity
} from './activitySearch';
import splitArrayByTime from './splitArrayByTime';
import { useInfo } from '../components/CalendarContext';

const useReset = () => {
    const {
        updateDate,
        updateActivityDay,
        updateActivityNight,
        updateActivityAuto,
        updateActivityDates,
        updateWeekday,
        updateActivityStart,
        updateDateAvailability,
        updateActivityStartDate,
        updateActivityEndDate,
        updateActivityEnd,
        updateActivityDetails,

        updateBookdvdgameName,
        updateBookdvdgameChapters,
        updateBookdvdgameEffect,
        updateBookdvdgameDescription,
        updateBookdvdgamePrice,
        updateBookdvdgameLocation,
        updateBookdvdgameAvailable,
    } = useInfo();
    
    const stateReset = () => {
        updateDate("");
        updateActivityStart([]);
        updateActivityEnd([]);
        updateActivityDay([]);
        updateActivityNight([]);
        updateActivityAuto([]);
        updateActivityDates([])
        updateWeekday("");
        updateDateAvailability("none");
        updateActivityStartDate("");
        updateActivityEndDate("");
        updateActivityDetails("");

        updateBookdvdgameName("");
        updateBookdvdgameChapters("");
        updateBookdvdgameEffect("");
        updateBookdvdgameDescription("");
        updateBookdvdgamePrice("");
        updateBookdvdgameLocation("");
        updateBookdvdgameAvailable("");
    };

    return { stateReset };
}

export const dateClick = (monthIndex, dateType, dateNumber, weekday, activityName) => {
    const { stateReset } = useReset();

    const {
        updateDate,
        updateActivityDay,
        updateActivityNight,
        updateActivityAuto,
        updateActivityDates,
        updateWeekday,
        updateActivityStart,
        updateDateAvailability,
        updateActivityStartDate,
        updateActivityEndDate,
        updateActivityEnd,
        updateActivityDetails,
    } = useInfo();

    const [clicked, setClicked] = useState(false);
  
    const handleClick = () => {
        setClicked((prevClicked) => !prevClicked);
        if (dateNumber > 0) {
            stateReset();
            updateDate(`${monthIndex}/${dateNumber}`);
            const activityList = [
                ...searchByWeekday(monthIndex, dateNumber, weekday),
                ...searchByDate(`${monthIndex}/${dateNumber}`),
                ...searchByExtraDate(`${monthIndex}/${dateNumber}`),
            ];
            const { autoArray, dayArray, nightArray } = splitArrayByTime(activityList);
            
            updateActivityDay(dayArray);
            updateActivityNight(nightArray);
            updateActivityAuto(autoArray);
            updateActivityDates([])
            updateWeekday(weekday);
            updateDateAvailability(dateType);
    
            const activitiesStartList = searchByStartDate(monthIndex, dateNumber);
            updateActivityStart(activitiesStartList);

            const activitiesEndList = searchByEndDate(monthIndex, dateNumber);
            updateActivityEnd(activitiesEndList);
        } else if (dateNumber === 0) {
            stateReset();
            updateDate(activityName);
            const dateList = searchByActivity(activityName);
            const startDate = searchStartDateByActivity(activityName);
            const endDate = searchEndDateByActivity(activityName);
            const details = searchDetailsByActivity(activityName);

            updateActivityDates(dateList);
            updateDateAvailability("none");
            updateActivityStartDate([`${startDate.month}/${startDate.day}`]);
            updateActivityEndDate([`${endDate.month}/${endDate.day}`]);
            updateActivityDetails(details);
        } else {
            stateReset();
        }
    };
  
    return { clicked, handleClick };
  };

  export const BookDVDGameClick = (name, chapters, effect, description, price, location, available) => {
    const { stateReset } = useReset();

    const handleClick = () => {
        stateReset();

        updateBookdvdgameName(name);
        updateBookdvdgameChapters(chapters);
        updateBookdvdgameEffect(effect);
        updateBookdvdgameDescription(description);
        updateBookdvdgamePrice(price);
        updateBookdvdgameLocation(location);
        updateBookdvdgameAvailable(available);
    }

    return { handleClick };
  }