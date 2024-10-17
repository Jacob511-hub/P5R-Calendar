import React, { useState } from 'react';

export function updateDateDisplay() {
    const [dateDisplay, setDateDisplay] = useState("");

    const updateDate = (newDate) => {
        setDateDisplay(newDate);
    };

    return {dateDisplay, updateDate};
}