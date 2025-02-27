import { useState, useEffect } from 'react';
import { books as booksData, dvds as dvdsData, games as gamesData } from '../hooks/bookdvdgame';
import { confidants as confidantData } from '../hooks/confidants';

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
  const [confidantChoices, setConfidantChoicesDisplay] = useState("");

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
  const [homeShoppingAvailable, sethomeShoppingAvailable] = useState("");

  const [quizDates, setQuizDates] = useState("");
  const [quizAnswers, setQuizAnswers] = useState("");
  const [quizAvailable, setQuizAvailable] = useState("");
  
  const [trainReadAvailable, setTrainReadAvailable] = useState("");
  const [dodgeChalkAvailable, setDodgeChalkAvailable] = useState("");
  const [slackOffAvailable, setSlackOffAvailable] = useState("");

  const [filter, setFilter] = useState("");
  const [stat, setStat] = useState("");

  const [books, setBooks] = useState(booksData);
  const [dvds, setDvds] = useState(dvdsData);
  const [games, setGames] = useState(gamesData);

  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem('books')) || booksData;
    const savedDvds = JSON.parse(localStorage.getItem('dvds')) || dvdsData;
    const savedGames = JSON.parse(localStorage.getItem('games')) || gamesData;
  
    setBooks(savedBooks);
    setDvds(savedDvds);
    setGames(savedGames);
  }, []);

  const [confidants, setConfidants] = useState(
    JSON.parse(localStorage.getItem('confidants')) || confidantData
  );

  useEffect(() => {
    const savedConfidants = JSON.parse(localStorage.getItem('confidants')) || confidantData;

    setConfidants(savedConfidants);
  }, []);

  const [classroomQuestionDates, setClassroomQuestionDates] = useState("");
  const [classroomQuestionAnswers, setClassroomQuestionAnswers] = useState("");
  const [classroomQuestionAvailable, setClassroomQuestionAvailable] = useState("");
  const [examAvailable, setExamAvailable] = useState("");

  const [facilityName, setFacilityName] = useState("");
  const [facilityAvailable, setFacilityAvailable] = useState("");
  const [facilityEffect, setFacilityEffect] = useState("");

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
  const updateConfidantChoices = (newConfidantChoices) => setConfidantChoicesDisplay(newConfidantChoices);

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
  const updateHomeShoppingAvailable = (homeShoppingAvailable) => sethomeShoppingAvailable(homeShoppingAvailable);

  const updateQuizDates = (quizDates) => setQuizDates(quizDates);
  const updateQuizAnswers = (quizAnswers) => setQuizAnswers(quizAnswers);
  const updateQuizAvailable = (quizAvailable) => setQuizAvailable(quizAvailable);
  
  const updateTrainReadAvailable = (trainReadAvailable) => setTrainReadAvailable(trainReadAvailable);
  const updateDodgeChalkAvailable = (dodgeChalkAvailable) => setDodgeChalkAvailable(dodgeChalkAvailable);
  const updateSlackOffAvailable = (slackOffAvailable) => setSlackOffAvailable(slackOffAvailable);

  const updateFilter = (filter) => setFilter(filter);
  const updateStat = (stat) => setStat(stat);

  const updateClassroomQuestionDates = (classroomQuestionDates) => setClassroomQuestionDates(classroomQuestionDates);
  const updateClassroomQuestionAnswers = (classroomQuestionAnswers) => setClassroomQuestionAnswers(classroomQuestionAnswers);
  const updateClassroomQuestionAvailable = (classroomQuestionAvailable) => setClassroomQuestionAvailable(classroomQuestionAvailable);
  const updateExamAvailable = (examAvailable) => setExamAvailable(examAvailable);

  const updateFacilityName = (facilityName) => setFacilityName(facilityName);
  const updateFacilityAvailable = (facilityAvailable) => setFacilityAvailable(facilityAvailable);
  const updateFacilityEffect = (facilityEffect) => setFacilityEffect(facilityEffect);

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
    confidantChoices,
    updateConfidantChoices,

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
    homeShoppingAvailable,
    updateHomeShoppingAvailable,

    quizDates,
    updateQuizDates,
    quizAnswers,
    updateQuizAnswers,
    quizAvailable,
    updateQuizAvailable,
    trainReadAvailable,
    updateTrainReadAvailable,
    dodgeChalkAvailable,
    updateDodgeChalkAvailable,
    slackOffAvailable,
    updateSlackOffAvailable,

    filter,
    updateFilter,
    stat,
    updateStat,

    books,
    setBooks,
    dvds,
    setDvds,
    games,
    setGames,

    confidants,
    setConfidants,

    classroomQuestionDates,
    updateClassroomQuestionDates,
    classroomQuestionAnswers,
    updateClassroomQuestionAnswers,
    classroomQuestionAvailable,
    updateClassroomQuestionAvailable,
    examAvailable,
    updateExamAvailable,

    facilityName,
    updateFacilityName,
    facilityAvailable,
    updateFacilityAvailable,
    facilityEffect,
    updateFacilityEffect,
  };
}