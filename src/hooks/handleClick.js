import React, { useState } from 'react';
import { searchByDate } from './activitySearch';
import { searchByStartDate } from './activitySearch';
import { searchByActivity } from './activitySearch';
import { searchByWeekday } from './activitySearch';
import splitArrayByTime from './splitArrayByTime';

export const dateClick = (monthIndex, dateNumber, weekday, activityName, onClick, activitiesUpdateDay, activitiesUpdateNight, activitiesUpdateAuto, activitiesDateList, weekdayUpdate, activitiesStartUpdate) => {
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
        } else {
            onClick("");
            activitiesStartUpdate([]);
            activitiesUpdateDay([]);
            activitiesUpdateNight([]);
            activitiesUpdateAuto([]);
            activitiesDateList([])
            weekdayUpdate("");
        }
    };
  
    return { clicked, handleClick };
  };