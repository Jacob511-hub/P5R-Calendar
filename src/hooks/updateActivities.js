import React, { useState } from 'react';

export function updateActivityDisplay() {
    const [activityList, setActivityDisplay] = useState("");

    const updateActivity = (newActivityDisplay) => {
        setActivityDisplay(newActivityDisplay);
    };

    return {activityList, updateActivity};
}