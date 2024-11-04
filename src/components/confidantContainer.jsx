import React from 'react';
import { dateClick } from '../hooks/handleClick.js';
import { useInfo } from '../components/CalendarContext';

const ConfidantContainer = ({
    tarot,
    name,
}) => {

    const {
        updateDate,
        updateActivityDay,
        updateActivityNight,
        updateActivityAuto,
        updateActivityDates,
        updateWeekday,
        updateActivityStart,
        updateDateAvailability,
      } = useInfo();

    const {clicked, handleClick} = dateClick(
        0,
        "",
        0,
        "",
        name,
        updateDate,
        updateActivityDay,
        updateActivityNight,
        updateActivityAuto,
        updateActivityDates,
        updateWeekday,
        updateActivityStart,
        updateDateAvailability
    );

    return (
        <div className="confidant-container" onClick={handleClick}>
            <img
                className="tarot"
                src={tarot}>
            </img>
            <h1 className="confidant-name">{name}</h1>
        </div>
    );
}

export default ConfidantContainer;