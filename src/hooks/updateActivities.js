import React, { useState } from 'react';

export function updateActivityDisplayDay() {
    const [activityListDay, setActivityDisplayDay] = useState("");

    const updateActivityDay = (newActivityDisplayDay) => {
        setActivityDisplayDay(newActivityDisplayDay);
    };

    return {activityListDay, updateActivityDay};
}

export function updateActivityDisplayNight() {
    const [activityListNight, setActivityDisplayNight] = useState("");

    const updateActivityNight = (newActivityDisplayNight) => {
        setActivityDisplayNight(newActivityDisplayNight);
    };

    return {activityListNight, updateActivityNight};
}

export function updateActivityDisplayAuto() {
    const [activityListAuto, setActivityDisplayAuto] = useState("");

    const updateActivityAuto = (newActivityDisplayAuto) => {
        setActivityDisplayAuto(newActivityDisplayAuto);
    };

    return {activityListAuto, updateActivityAuto};
}