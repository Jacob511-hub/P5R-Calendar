import React, { useState } from 'react';

//! This file isn't in the hooks folder

export function updateActivityStartDisplay() {
    const [activityStartList, setActivityStartDisplay] = useState("");

    const updateActivityStart = (newActivityStartDisplay) => {
        setActivityStartDisplay(newActivityStartDisplay);
    };

    return {activityStartList, updateActivityStart};
}