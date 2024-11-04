import { useState } from 'react';
import { searchByDate } from './activitySearch';
import { searchByStartDate } from './activitySearch';
import { searchByActivity } from './activitySearch';
import { searchByWeekday } from './activitySearch';
import splitArrayByTime from './splitArrayByTime';

export const dateClick = (
    monthIndex,
    dateType,
    dateNumber,
    weekday,
    activityName,
    onClick,
    activitiesUpdateDay,
    activitiesUpdateNight,
    activitiesUpdateAuto,
    activitiesDateList,
    weekdayUpdate,
    activitiesStartUpdate,
    dateAvailabilityUpdate
) => {
    const [clicked, setClicked] = useState(false);
  
    const handleClick = () => {
        setClicked((prevClicked) => !prevClicked);
        if (dateNumber > 0) {
            onClick(`${monthIndex}/${dateNumber}`);
            const activityList = [
                ...searchByWeekday(monthIndex, dateNumber, weekday),
                ...searchByDate(`${monthIndex}/${dateNumber}`),
            ];
            const { autoArray, dayArray, nightArray } = splitArrayByTime(activityList);
            
            activitiesUpdateDay(dayArray);
            activitiesUpdateNight(nightArray);
            activitiesUpdateAuto(autoArray);
            activitiesDateList([])
            weekdayUpdate(weekday);
            dateAvailabilityUpdate(dateType);
    
            const activitiesStartList = searchByStartDate(monthIndex, dateNumber);
            activitiesStartUpdate(activitiesStartList);
    
        } else if (dateNumber === 0) {
            onClick(activityName);
            const dateList = searchByActivity(activityName);

            activitiesStartUpdate([]);
            activitiesUpdateDay([]);
            activitiesUpdateNight([]);
            activitiesUpdateAuto([]);
            activitiesDateList(dateList);
            weekdayUpdate("");
            dateAvailabilityUpdate("none");
        } else {
            onClick("");
            activitiesStartUpdate([]);
            activitiesUpdateDay([]);
            activitiesUpdateNight([]);
            activitiesUpdateAuto([]);
            activitiesDateList([])
            weekdayUpdate("");
            dateAvailabilityUpdate("none");
        }
    };
  
    return { clicked, handleClick };
  };