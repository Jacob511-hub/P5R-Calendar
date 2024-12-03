import * as activityDates from './activityDates';
import * as activityStartDates from './activityStartDates';
import * as activityDetails from './activityDetails';
import * as crosswordDetails from './crosswords';
import { books, dvds, games } from './bookdvdgame';
import { leblancActivities } from './leblanc';
import { jobs } from './jobs';

//Search for activities with set dates
export function searchByDate(date) {
    const matchedArrays = activityDates.activityNames.filter((item) => item.array.includes(date)).map((item) => item.name);
    return matchedArrays;
}

//Search for activities with dates outside of their weekly schedule
export function searchByExtraDate(date) {
    const matchedArrays = activityStartDates.activityExtraNames.filter((item) => item.extraDates.includes(date)).map((item) => item.name);
    return matchedArrays;
}

//Search by start date
export function searchByStartDate(month, day) {
    month = parseInt(month, 10);
    day = parseInt(day, 10);
    
    const matchedArrays = activityStartDates.activityStartNames
        .filter(activity => activity.startDate.month === month && activity.startDate.day === day)
        .map(activity => activity.name);

    return matchedArrays;
}

//Search by end date
export function searchByEndDate(month, day) {
    month = parseInt(month, 10);
    day = parseInt(day, 10);
    
    const matchedArrays = activityStartDates.activityEndNames
        .filter(activity => activity.endDate.month === month && activity.endDate.day === day)
        .map(activity => activity.name);

    return matchedArrays;
}

//Search for activities with weekly schedules, checking for the activity's start and end dates
export function searchByWeekday(month, day, weekday) {
    const startDatesArray = [];
    const matchedArrays = activityDates.activityNames.filter((item) => item.array.includes(weekday)).map((item) => item.name);
    for (let index = 0; index < matchedArrays.length; index++) {
        for (let i = 0; i < activityStartDates.activityStartNames.length; i++) {
            if (matchedArrays[index] === activityStartDates.activityStartNames[i].name) {
                let startMonth = activityStartDates.activityStartNames[i].startDate.month;
                let startDay = activityStartDates.activityStartNames[i].startDate.day;
                let endMonth = activityStartDates.activityEndNames[i].endDate.month;
                let endDay = activityStartDates.activityEndNames[i].endDate.day;

                let monthIndex = (((month === 12 ? 0 : month) - 4)+ 12) % 12;
                let startMonthIndex = (((startMonth === 12 ? 0 : startMonth) - 4)+ 12) % 12;
                let endMonthIndex = (((endMonth === 12 ? 0 : endMonth) - 4)+ 12) % 12;

                if ((monthIndex > startMonthIndex || (monthIndex === startMonthIndex && day >= startDay)) && (monthIndex < endMonthIndex || (monthIndex === endMonthIndex && day <= endDay))) {
                    const activityExceptions = activityStartDates.activityExceptionNames.find((item) => item.name === matchedArrays[index]);

                    if (activityExceptions && activityExceptions.exceptionDates.includes(`${month}/${day}`)) {
                        continue;
                    }
                    
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

export function searchStartDateByActivity(activity) {
    const matchedActivity = activityStartDates.activityStartNames.find((item) => item.name === activity);
    return matchedActivity ? matchedActivity.startDate : [""]; 
}

export function searchEndDateByActivity(activity) {
    const matchedActivity = activityStartDates.activityEndNames.find((item) => item.name === activity);
    return matchedActivity ? matchedActivity.endDate : [""]; 
}

export function searchDetailsByActivity(activity) {
    const matchedActivity = activityDetails.activityDetailsNames.find((item) => item.name === activity);
    return matchedActivity ? matchedActivity.details : [""]; 
}

export function searchCrosswordDates(date) {
    return crosswordDetails.crosswordDates.includes(date);
}

//Search function for filtering by stats
export function statSearch(searchStat) {

    const allArrays = [books, dvds, games, leblancActivities, jobs];
    console.log(allArrays.flat().filter((obj) => Array.isArray(obj.stat) && obj.stat.includes(searchStat)));
    return allArrays.flat().filter((obj) => Array.isArray(obj.stat) && obj.stat.includes(searchStat));
}