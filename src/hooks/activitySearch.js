import * as activityDates from './activityDates';
import * as activityStartDates from './activityStartDates'

//Search for activities with set dates
export function searchByDate(date) {
    const matchedArrays = activityDates.activityNames.filter((item) => item.array.includes(date)).map((item) => item.name);
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

//Search for activities with weekly schedules
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