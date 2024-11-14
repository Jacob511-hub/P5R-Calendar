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
  const [activityDetails, setActivityDetailsDisplay] = useState("");

  const [bookdvdgameName, setBookdvdgameName] = useState("");
  const [bookdvdgameChapters, setBookdvdgameChapters] = useState("");
  const [bookdvdgameEffect, setBookdvdgameEffect] = useState("");
  const [bookdvdgameDescription, setBookdvdgameDescription] = useState("");
  const [bookdvdgamePrice, setBookdvdgamePrice] = useState("");
  const [bookdvdgameLocation, setBookdvdgameLocation] = useState("");
  const [bookdvdgameAvailable, setBookdvdgameAvailable] = useState("");

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
  const updateActivityDetails = (newActivityDetailsDisplay) => setActivityDetailsDisplay(newActivityDetailsDisplay);

  const updateBookdvdgameName = (bookdvdgameNameDisplay) => setBookdvdgameName(bookdvdgameNameDisplay);
  const updateBookdvdgameChapters = (bookdvdgameChaptersDisplay) => setBookdvdgameChapters(bookdvdgameChaptersDisplay);
  const updateBookdvdgameEffect = (bookdvdgameEffectDisplay) => setBookdvdgameEffect(bookdvdgameEffectDisplay);
  const updateBookdvdgameDescription = (bookdvdgameDescriptionDisplay) => setBookdvdgameDescription(bookdvdgameDescriptionDisplay);
  const updateBookdvdgamePrice = (bookdvdgamePriceDisplay) => setBookdvdgamePrice(bookdvdgamePriceDisplay);
  const updateBookdvdgameLocation = (bookdvdgameLocationDisplay) => setBookdvdgameLocation(bookdvdgameLocationDisplay);
  const updateBookdvdgameAvailable = (bookdvdgameAvailableDisplay) => setBookdvdgameAvailable(bookdvdgameAvailableDisplay);

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
    activityDetails,
    updateActivityDetails,

    bookdvdgameName,
    updateBookdvdgameName,
    bookdvdgameChapters,
    updateBookdvdgameChapters,
    bookdvdgameEffect,
    updateBookdvdgameEffect,
    bookdvdgameDescription,
    updateBookdvdgameDescription,
    bookdvdgamePrice,
    updateBookdvdgamePrice,
    bookdvdgameLocation,
    updateBookdvdgameLocation,
    bookdvdgameAvailable,
    updateBookdvdgameAvailable,
  };
}