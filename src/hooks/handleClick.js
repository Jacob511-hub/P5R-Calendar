import React, { useState } from 'react';
import { searchByDate } from './activitySearch';
import { searchByActivity } from './activitySearch';

export function dateClick(monthIndex, dateNumber, activityName, onClick, activitiesUpdate) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked((prevClicked) => !prevClicked);
        if (dateNumber > 0) {
            onClick(monthIndex + "/" + dateNumber);
            const activityList = searchByDate(monthIndex + "/" + dateNumber)
            activitiesUpdate(activityList);
        }
        else if (dateNumber === 0) {
            onClick(activityName);
            const dateList = searchByActivity(activityName)
            activitiesUpdate(dateList);
        }
        else {
            onClick("");
        }
    };

    return {clicked, handleClick};
}