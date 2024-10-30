import { activityNames } from './activityDates';

const splitArrayByTime = (inputArray) => {
  const timeLookup = activityNames.reduce((acc, activity) => {
    acc[activity.name] = activity.time;
    return acc;
  }, {});

  const autoArray = [];
  const dayArray = [];
  const nightArray = [];

  inputArray.forEach((name) => {
    const time = timeLookup[name];
    if (time === "Auto") autoArray.push(name);
    else if (time === "Day") dayArray.push(name);
    else if (time === "Night") nightArray.push(name);
  });

  return { autoArray, dayArray, nightArray };
};

export default splitArrayByTime;