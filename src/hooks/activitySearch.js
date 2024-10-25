import React, { useState } from 'react';
import * as activityDates from './activityDates';
import * as activityStartDates from './activityStartDates'

export function searchByDate(date) {
    const matchedArrays = activityDates.activityNames.filter((item) => item.array.includes(date)).map((item) => item.name);
    return matchedArrays;
}

export function searchByWeekday(month, day, weekday) {
    const startDatesArray = [];
    const matchedArrays = activityDates.activityNames.filter((item) => item.array.includes(weekday)).map((item) => item.name);
    for (let index = 0; index < matchedArrays.length; index++) {
        for (let i = 0; i < activityStartDates.activityStartNames.length; i++) {
            if (matchedArrays[index] === activityStartDates.activityStartNames[i].name) {
                let startMonth = activityStartDates.activityStartNames[i].startDate.month;
                let startDay = activityStartDates.activityStartNames[i].startDate.day;

                let monthIndex = (((month === 12 ? 0 : month) - 4)+ 12) % 12;
                let startMonthIndex = (((startMonth === 12 ? 0 : startMonth) - 4)+ 12) % 12;

                if (monthIndex > startMonthIndex || (monthIndex === startMonthIndex && day >= startDay)) {
                    startDatesArray.push(matchedArrays[index]);
                }
            }
        }
    }
    return startDatesArray;
}

export function searchByActivity(activity) {
    const matchedActivity = activityDates.activityNames.find((item) => item.name === activity);
    return matchedActivity ? matchedActivity.array : [""]; 
}