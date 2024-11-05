import { useState } from 'react';
import {
    searchByDate,
    searchByStartDate,
    searchByEndDate,
    searchByActivity,
    searchByWeekday,
    searchStartDateByActivity,
    searchEndDateByActivity
} from './activitySearch';
import splitArrayByTime from './splitArrayByTime';
import { useInfo } from '../components/CalendarContext';

export const dateClick = (monthIndex, dateType, dateNumber, weekday, activityName) => {
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
      } = useInfo();

    const [clicked, setClicked] = useState(false);
  
    const handleClick = () => {
        setClicked((prevClicked) => !prevClicked);
        if (dateNumber > 0) {
            updateDate(`${monthIndex}/${dateNumber}`);
            const activityList = [
                ...searchByWeekday(monthIndex, dateNumber, weekday),
                ...searchByDate(`${monthIndex}/${dateNumber}`),
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

            updateActivityStartDate("");
            updateActivityEndDate("");
        } else if (dateNumber === 0) {
            updateDate(activityName);
            const dateList = searchByActivity(activityName);
            const startDate = searchStartDateByActivity(activityName);
            const endDate = searchEndDateByActivity(activityName);

            updateActivityStart([]);
            updateActivityEnd([]);
            updateActivityDay([]);
            updateActivityNight([]);
            updateActivityAuto([]);
            updateActivityDates(dateList);
            updateWeekday("");
            updateDateAvailability("none");
            updateActivityStartDate([`${startDate.month}/${startDate.day}`]);
            updateActivityEndDate([`${endDate.month}/${endDate.day}`]);
        } else {
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
        }
    };
  
    return { clicked, handleClick };
  };