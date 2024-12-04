import { useState } from 'react';
import { books as booksData, dvds as dvdsData, games as gamesData } from '../hooks/bookdvdgame';

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
  
  const [jobName, setjobName] = useState("");
  const [jobRequirements, setjobRequirements] = useState("");
  const [jobPay, setjobPay] = useState("");
  const [jobStats, setjobStats] = useState("");
  const [jobBonus, setjobBonus] = useState("");
  const [jobUnlocks, setjobUnlocks] = useState("");

  const [crosswordDates, setCrosswordDates] = useState("");
  const [crosswordQuestion, setCrosswordQuestion] = useState("");
  const [crosswordAnswer, setCrosswordAnswer] = useState("");
  const [crosswordAvailable, setCrosswordAvailable] = useState("");

  const [leblancActivityName, setLeblancActivityName] = useState("");
  const [leblancActivityAvailable, setLeblancActivityAvailable] = useState("");
  const [leblancActivityEffect, setLeblancActivityEffect] = useState("");

  const [homeShoppingDates, setHomeShoppingDates] = useState("");
  const [homeShoppingItemA, setHomeShoppingItemA] = useState("");
  const [homeShoppingPriceA, setHomeShoppingPriceA] = useState("");
  const [homeShoppingItemB, setHomeShoppingItemB] = useState("");
  const [homeShoppingPriceB, setHomeShoppingPriceB] = useState("");

  const [quizDates, setQuizDates] = useState("");
  const [quizAnswers, setQuizAnswers] = useState("");

  const [filter, setFilter] = useState("");

  const [books, setBooks] = useState(booksData);
  const [dvds, setDvds] = useState(dvdsData);
  const [games, setGames] = useState(gamesData);

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
  
  const updatejobName = (jobNameDisplay) => setjobName(jobNameDisplay);
  const updatejobRequirements = (jobRequirementsDisplay) => setjobRequirements(jobRequirementsDisplay);
  const updatejobPay = (jobPayDisplay) => setjobPay(jobPayDisplay);
  const updatejobStats = (jobStatsDisplay) => setjobStats(jobStatsDisplay);
  const updatejobBonus = (jobBonusDisplay) => setjobBonus(jobBonusDisplay);
  const updatejobUnlocks = (jobUnlocksDisplay) => setjobUnlocks(jobUnlocksDisplay);

  const updateCrosswordDates = (crosswordDatesDisplay) => setCrosswordDates(crosswordDatesDisplay);
  const updateCrosswordQuestion = (crosswordQuestionDisplay) => setCrosswordQuestion(crosswordQuestionDisplay);
  const updateCrosswordAnswer = (crosswordAnswerDisplay) => setCrosswordAnswer(crosswordAnswerDisplay);
  const updateCrosswordAvailable = (crosswordAvailableDisplay) => setCrosswordAvailable(crosswordAvailableDisplay);

  const updateLeblancActivityName = (leblancActivityName) => setLeblancActivityName(leblancActivityName);
  const updateLeblancActivityAvailable = (leblancActivityAvailable) => setLeblancActivityAvailable(leblancActivityAvailable);
  const updateLeblancActivityEffect = (leblancActivityEffect) => setLeblancActivityEffect(leblancActivityEffect);

  const updateHomeShoppingDates = (homeShoppingDates) => setHomeShoppingDates(homeShoppingDates);
  const updateHomeShoppingItemA = (homeShoppingItemA) => setHomeShoppingItemA(homeShoppingItemA);
  const updateHomeShoppingPriceA = (homeShoppingPriceA) => setHomeShoppingPriceA(homeShoppingPriceA);
  const updateHomeShoppingItemB = (homeShoppingItemB) => setHomeShoppingItemB(homeShoppingItemB);
  const updateHomeShoppingPriceB = (homeShoppingPriceB) => setHomeShoppingPriceB(homeShoppingPriceB);
  
  const updateQuizDates = (quizDates) => setQuizDates(quizDates);
  const updateQuizAnswers = (quizAnswers) => setQuizAnswers(quizAnswers);

  const updateFilter = (filter) => setFilter(filter);

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

    jobName,
    updatejobName,
    jobRequirements,
    updatejobRequirements,
    jobPay,
    updatejobPay,
    jobStats,
    updatejobStats,
    jobBonus,
    updatejobBonus,
    jobUnlocks,
    updatejobUnlocks,

    crosswordDates,
    updateCrosswordDates,
    crosswordQuestion,
    updateCrosswordQuestion,
    crosswordAnswer,
    updateCrosswordAnswer,
    crosswordAvailable,
    updateCrosswordAvailable,

    leblancActivityName,
    updateLeblancActivityName,
    leblancActivityAvailable,
    updateLeblancActivityAvailable,
    leblancActivityEffect,
    updateLeblancActivityEffect,

    homeShoppingDates,
    updateHomeShoppingDates,
    homeShoppingItemA,
    updateHomeShoppingItemA,
    homeShoppingPriceA,
    updateHomeShoppingPriceA,
    homeShoppingItemB,
    updateHomeShoppingItemB,
    homeShoppingPriceB,
    updateHomeShoppingPriceB,

    quizDates,
    updateQuizDates,
    quizAnswers,
    updateQuizAnswers,

    filter,
    updateFilter,

    books,
    setBooks,
    dvds,
    setDvds,
    games,
    setGames,
  };
}