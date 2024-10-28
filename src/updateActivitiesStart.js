import React, { useState } from 'react';

export function updateActivityStartDisplay() {
    const [activityStartList, setActivityStartDisplay] = useState("");

    const updateActivityStart = (newActivityStartDisplay) => {
        setActivityStartDisplay(newActivityStartDisplay);
    };

    return {activityStartList, updateActivityStart};
}