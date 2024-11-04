import { useState } from 'react';
import { searchByDate } from './activitySearch';
import { searchByStartDate } from './activitySearch';
import { searchByActivity } from './activitySearch';
import { searchByWeekday } from './activitySearch';
import { searchStartDateByActivity } from './activitySearch';
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
        updateActivityStartDate
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
            updateActivityStartDate("");
        } else if (dateNumber === 0) {
            updateDate(activityName);
            const dateList = searchByActivity(activityName);
            const startDate = searchStartDateByActivity(activityName);

            updateActivityStart([]);
            updateActivityDay([]);
            updateActivityNight([]);
            updateActivityAuto([]);
            updateActivityDates(dateList);
            updateWeekday("");
            updateDateAvailability("none");
            updateActivityStartDate([`${startDate.month}/${startDate.day}`]);
        } else {
            updateDate("");
            updateActivityStart([]);
            updateActivityDay([]);
            updateActivityNight([]);
            updateActivityAuto([]);
            updateActivityDates([])
            updateWeekday("");
            updateDateAvailability("none");
            updateActivityStartDate("");
        }
    };
  
    return { clicked, handleClick };
  };