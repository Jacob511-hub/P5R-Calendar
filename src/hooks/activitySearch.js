import React, { useState } from 'react';
import * as activityDates from './activityDates';

export function searchByDate(date) {
    const matchedArrays = activityDates.activityNames.filter((item) => item.array.includes(date)).map((item) => item.name);
    return matchedArrays;
}

export function searchByActivity(activity) {
    const matchedActivity = activityDates.activityNames.find((item) => item.name === activity);
    return matchedActivity ? matchedActivity.array : [""]; 
}