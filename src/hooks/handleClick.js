import React, { useState } from 'react';
import { searchByDate } from './activitySearch';
import { searchByStartDate } from './activitySearch';
import { searchByActivity } from './activitySearch';
import { searchByWeekday } from './activitySearch';

//! you can combine all of your search functions into one import statement ex: import { searchByDate, searchByStartDate, searchByActivity, searchByWeekday } from './activitySearch';

export function dateClick(monthIndex, dateNumber, weekday, activityName, onClick, activitiesUpdate, weekdayUpdate, activitiesStartUpdate) {
  const [clicked, setClicked] = useState(false);

  /*
    ! While the nested if statement here works fine it cna be hard to read and can be simplified by using a more functional approach. You can create helper functions for each condition and then call those in the if statement to make the code easier to read. This would also help with automated testing down the line as you can test each helper function individually.

    ex:
    const updateForDate = () => {
        onClick(monthIndex + "/" + dateNumber);
        const activityList = [...searchByDate(monthIndex + "/" + dateNumber), ...searchByWeekday(monthIndex, dateNumber, weekday)]
        activitiesUpdate(activityList);
        weekdayUpdate(weekday);
        const activitiesStartList = searchByStartDate(monthIndex, dateNumber)
        activitiesStartUpdate(activitiesStartList);
    }

    const updateForActivity = () => {
        onClick(activityName);
        const dateList = searchByActivity(activityName)
        activitiesUpdate(dateList);
        weekdayUpdate("");
    }

    const clearUpdates = () => {
        onClick("");
        activitiesUpdate("");
        weekdayUpdate("");
    }

    const handleClick = () => {
        setClicked((prevClicked) => !prevClicked);
        if (dateNumber > 0) updateForDate();
        else if (dateNumber === 0) updateForActivity();
        else clearUpdates();
    };
    
    */

  const handleClick = () => {
    setClicked((prevClicked) => !prevClicked);
    if (dateNumber > 0) {
      onClick(monthIndex + "/" + dateNumber);
      const activityList = [
        ...searchByDate(monthIndex + "/" + dateNumber),
        ...searchByWeekday(monthIndex, dateNumber, weekday),
      ];
      activitiesUpdate(activityList);
      weekdayUpdate(weekday);
      const activitiesStartList = searchByStartDate(monthIndex, dateNumber);
      activitiesStartUpdate(activitiesStartList);
    } else if (dateNumber === 0) {
      onClick(activityName);
      const dateList = searchByActivity(activityName);
      activitiesUpdate(dateList);
      weekdayUpdate("");
    } else {
      onClick("");
      activitiesUpdate("");
      weekdayUpdate("");
    }
  };

  return { clicked, handleClick };
}