import React, { useState } from 'react';

export function updateWeekdayDisplay() {
    const [weekdayDisplay, setWeekdayDisplay] = useState("");

    const updateWeekday = (newWeekdayDisplay) => {
        setWeekdayDisplay(newWeekdayDisplay);
    };

    return {weekdayDisplay, updateWeekday};
}