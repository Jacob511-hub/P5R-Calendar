import { useState } from 'react';

export function useUpdateInfo() {
  const [weekdayDisplay, setWeekdayDisplay] = useState("");
  const [dateDisplay, setDateDisplay] = useState("");
  const [activityStartList, setActivityStartDisplay] = useState("");
  const [activityListDay, setActivityListDay] = useState("");
  const [activityListNight, setActivityListNight] = useState("");
  const [activityListAuto, setActivityListAuto] = useState("");
  const [activityListDates, setActivityListDates] = useState("");
  const [dateAvailability, setDateAvailability] = useState("");
  const [activityStartDate, setActivityStartDate] = useState("");
  const [activityEndDate, setActivityEndDate] = useState("");
  const [activityEndList, setActivityEndDisplay] = useState("");

  const updateWeekday = (newWeekdayDisplay) => setWeekdayDisplay(newWeekdayDisplay);
  const updateDate = (newDate) => setDateDisplay(newDate);
  const updateActivityStart = (newActivityStartDisplay) => setActivityStartDisplay(newActivityStartDisplay);
  const updateActivityDay = (newActivityDay) => setActivityListDay(newActivityDay);
  const updateActivityNight = (newActivityNight) => setActivityListNight(newActivityNight);
  const updateActivityAuto = (newActivityAuto) => setActivityListAuto(newActivityAuto);
  const updateActivityDates = (newActivityDates) => setActivityListDates(newActivityDates);
  const updateDateAvailability = (newDateAvailability) => setDateAvailability(newDateAvailability);
  const updateActivityStartDate = (newStartDate) => setActivityStartDate(newStartDate);
  const updateActivityEndDate = (newEndDate) => setActivityEndDate(newEndDate);
  const updateActivityEnd = (newActivityEndDisplay) => setActivityEndDisplay(newActivityEndDisplay);

  return {
    dateDisplay,
    updateDate,
    weekdayDisplay,
    updateWeekday,
    activityStartList,
    updateActivityStart,
    activityListDay,
    updateActivityDay,
    activityListNight,
    updateActivityNight,
    activityListAuto,
    updateActivityAuto,
    activityListDates,
    updateActivityDates,
    dateAvailability,
    updateDateAvailability,
    activityStartDate,
    updateActivityStartDate,
    activityEndDate,
    updateActivityEndDate,
    activityEndList,
    updateActivityEnd,
  };
}