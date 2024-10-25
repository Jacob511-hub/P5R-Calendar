import React, { useState } from 'react';
import { searchByDate } from './activitySearch';
import { searchByActivity } from './activitySearch';
import { searchByWeekday } from './activitySearch';

export function dateClick(monthIndex, dateNumber, weekday, activityName, onClick, activitiesUpdate, weekdayUpdate) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked((prevClicked) => !prevClicked);
        if (dateNumber > 0) {
            onClick(monthIndex + "/" + dateNumber);
            const activityList = [...searchByDate(monthIndex + "/" + dateNumber), ...searchByWeekday(monthIndex, dateNumber, weekday)]
            activitiesUpdate(activityList);
            weekdayUpdate(weekday);
        }
        else if (dateNumber === 0) {
            onClick(activityName);
            const dateList = searchByActivity(activityName)
            activitiesUpdate(dateList);
            weekdayUpdate("");
        }
        else {
            onClick("");
            activitiesUpdate("");
            weekdayUpdate("");
        }
    };

    return {clicked, handleClick};
}