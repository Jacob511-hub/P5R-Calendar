import { useState } from 'react';
import {
    searchByDate,
    searchByExtraDate,
    searchByStartDate,
    searchByEndDate,
    searchByActivity,
    searchByWeekday,
    searchStartDateByActivity,
    searchEndDateByActivity,
    searchDetailsByActivity,
    searchChoicesByConfidant,
    searchCrosswordDates,
    searchHomeShoppingDates,
    searchQuizDates,
    searchClassroomQuestionDates,
    searchExamDates,
    searchTrainReadDates,
    searchChalkDodgeDates,
    searchSlackOffDates,
} from './activitySearch';
import splitArrayByTime from './splitArrayByTime';
import { useInfo } from '../components/CalendarContext';

const useReset = () => {
    const {
        updateDate,
        updateActivityDay,
        updateActivityNight,
        updateActivityAuto,
        updateActivityDates,
        updateWeekday,
        updateActivityStart,
        updateDateAvailability,
        updateActivityStartDate,
        updateActivityEndDate,
        updateActivityEnd,
        updateActivityDetails,
        updateConfidantChoices,

        updateBookdvdgameName,
        updateBookdvdgameChapters,
        updateBookdvdgameEffect,
        updateBookdvdgameDescription,
        updateBookdvdgamePrice,
        updateBookdvdgameLocation,
        updateBookdvdgameAvailable,
        
        updatejobName,
        updatejobRequirements,
        updatejobPay,
        updatejobStats,
        updatejobBonus,
        updatejobUnlocks,

        updateCrosswordDates,
        updateCrosswordQuestion,
        updateCrosswordAnswer,
        updateCrosswordAvailable,

        updateLeblancActivityName,
        updateLeblancActivityAvailable,
        updateLeblancActivityEffect,

        updateHomeShoppingDates,
        updateHomeShoppingItemA,
        updateHomeShoppingPriceA,
        updateHomeShoppingItemB,
        updateHomeShoppingPriceB,
        updateHomeShoppingAvailable,

        updateQuizDates,
        updateQuizAnswers,
        updateQuizAvailable,
        updateTrainReadAvailable,
        updateDodgeChalkAvailable,
        updateSlackOffAvailable,

        updateClassroomQuestionDates,
        updateClassroomQuestionAnswers,
        updateClassroomQuestionAvailable,
        updateExamAvailable,

        updateFacilityName,
        updateFacilityAvailable,
        updateFacilityEffect,
    } = useInfo();
    
    const stateReset = () => {
        updateDate("");
        updateActivityStart([]);
        updateActivityEnd([]);
        updateActivityDay([]);
        updateActivityNight([]);
        updateActivityAuto([]);
        updateActivityDates([])
        updateWeekday("");
        updateDateAvailability("none");
        updateActivityStartDate("");
        updateActivityEndDate("");
        updateActivityDetails("");
        updateConfidantChoices([]);

        updateBookdvdgameName("");
        updateBookdvdgameChapters("");
        updateBookdvdgameEffect("");
        updateBookdvdgameDescription("");
        updateBookdvdgamePrice("");
        updateBookdvdgameLocation("");
        updateBookdvdgameAvailable("");
        
        updatejobName("");
        updatejobRequirements("");
        updatejobPay("");
        updatejobStats("");
        updatejobBonus("");
        updatejobUnlocks("");

        updateCrosswordDates("");
        updateCrosswordQuestion("");
        updateCrosswordAnswer("");
        updateCrosswordAvailable(false);

        updateLeblancActivityName("");
        updateLeblancActivityAvailable("");
        updateLeblancActivityEffect([]);

        updateHomeShoppingDates("");
        updateHomeShoppingItemA("");
        updateHomeShoppingPriceA("");
        updateHomeShoppingItemB("");
        updateHomeShoppingPriceB("");
        updateHomeShoppingAvailable(false);

        updateQuizDates("");
        updateQuizAnswers("");
        updateQuizAvailable(false);
        updateTrainReadAvailable(false);
        updateDodgeChalkAvailable(false);
        updateSlackOffAvailable(false);

        updateClassroomQuestionDates("");
        updateClassroomQuestionAnswers("");
        updateClassroomQuestionAvailable(false);
        updateExamAvailable(false);

        updateFacilityName("");
        updateFacilityAvailable("");
        updateFacilityEffect("");
    };

    return { stateReset };
}

export const dateClick = (monthIndex, dateType, dateNumber, weekday) => {
    const { stateReset } = useReset();

    const {
        updateDate,
        updateActivityDay,
        updateActivityNight,
        updateActivityAuto,
        updateWeekday,
        updateActivityStart,
        updateDateAvailability,
        updateActivityEnd,
        updateCrosswordAvailable,
        updateHomeShoppingAvailable,
        updateQuizAvailable,
        updateTrainReadAvailable,
        updateDodgeChalkAvailable,
        updateClassroomQuestionAvailable,
        updateExamAvailable,
        updateSlackOffAvailable,

        confidants,
    } = useInfo();

    const [clicked, setClicked] = useState(false);
  
    const handleClick = () => {
        setClicked((prevClicked) => !prevClicked);
        if (dateNumber > 0) {
            stateReset();
            updateDate(`${monthIndex}/${dateNumber}`);
            const activityList = [
                ...searchByWeekday(monthIndex, dateNumber, weekday, confidants),
                ...searchByDate(`${monthIndex}/${dateNumber}`, confidants),
                ...searchByExtraDate(`${monthIndex}/${dateNumber}`, confidants),
            ];
            const { autoArray, dayArray, nightArray } = splitArrayByTime(activityList);
            
            updateActivityDay(dayArray);
            updateActivityNight(nightArray);
            updateActivityAuto(autoArray);
            updateWeekday(weekday);
            updateDateAvailability(dateType);
    
            const activitiesStartList = searchByStartDate(monthIndex, dateNumber);
            updateActivityStart(activitiesStartList);

            const activitiesEndList = searchByEndDate(monthIndex, dateNumber);
            updateActivityEnd(activitiesEndList);

            updateCrosswordAvailable(searchCrosswordDates(`${monthIndex}/${dateNumber}`));
            updateHomeShoppingAvailable(searchHomeShoppingDates(`${monthIndex}/${dateNumber}`));
            updateQuizAvailable(searchQuizDates(`${monthIndex}/${dateNumber}`));
            updateTrainReadAvailable(searchTrainReadDates(`${monthIndex}/${dateNumber}`));
            updateDodgeChalkAvailable(searchChalkDodgeDates(`${monthIndex}/${dateNumber}`));
            updateClassroomQuestionAvailable(searchClassroomQuestionDates(`${monthIndex}/${dateNumber}`));
            updateExamAvailable(searchExamDates(`${monthIndex}/${dateNumber}`));
            updateSlackOffAvailable(searchSlackOffDates(`${monthIndex}/${dateNumber}`));
        } else {
            stateReset();
        }
    };
  
    return { clicked, handleClick };
};

export const activityClick = (activityName) => {
    const { stateReset } = useReset();

    const {
        updateDate,
        updateActivityDates,
        updateActivityStartDate,
        updateActivityEndDate,
        updateActivityDetails,
        updateConfidantChoices,
    } = useInfo();

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        stateReset();

        updateDate(activityName);
        const dateList = searchByActivity(activityName);
        const startDate = searchStartDateByActivity(activityName);
        const endDate = searchEndDateByActivity(activityName);
        const details = searchDetailsByActivity(activityName);
        const choices = searchChoicesByConfidant(activityName);

        updateActivityDates(dateList);
        updateActivityStartDate([`${startDate.month}/${startDate.day}`]);
        updateActivityEndDate([`${endDate.month}/${endDate.day}`]);
        updateActivityDetails(details);
        updateConfidantChoices(choices);
    }

    return { clicked, handleClick };
}

export const useBookDVDGameClick = () => {
    const { stateReset } = useReset();

    const {
        updateBookdvdgameName,
        updateBookdvdgameChapters,
        updateBookdvdgameEffect,
        updateBookdvdgameDescription,
        updateBookdvdgamePrice,
        updateBookdvdgameLocation,
        updateBookdvdgameAvailable
    } = useInfo();

    return (name, chapters, effect, description, price, location, available) => {
        stateReset();

        updateBookdvdgameName(name);
        updateBookdvdgameChapters(chapters);
        updateBookdvdgameEffect(effect);
        updateBookdvdgameDescription(description);
        updateBookdvdgamePrice(price);
        updateBookdvdgameLocation(location);
        updateBookdvdgameAvailable(available);
    };
}

export const useJobClick = () => {
    const { stateReset } = useReset();

    const {
        updatejobName,
        updatejobRequirements,
        updatejobPay,
        updatejobStats,
        updatejobBonus,
        updatejobUnlocks,
    } = useInfo();

    return (name, requirements, pay, stats, bonus, unlocks) => {
        stateReset();

        updatejobName(name);
        updatejobRequirements(requirements);
        updatejobPay(pay);
        updatejobStats(stats);
        updatejobBonus(bonus);
        updatejobUnlocks(unlocks);
    };
};

export const useCrosswordDatesClick = () => {
    const { stateReset } = useReset();

    const {
        updateCrosswordDates
    } = useInfo();

    return (dates) => {
        stateReset();

        updateCrosswordDates(dates);
    };
}

export const useCrosswordSolutionsClick = () => {
    const { stateReset } = useReset();

    const {
        updateCrosswordQuestion,
        updateCrosswordAnswer,
    } = useInfo();

    return (crosswords) => {
        stateReset();

        const questions = crosswords.map(crossword => crossword.question);
        const answers = crosswords.map(crossword => crossword.answer);

        updateCrosswordQuestion(questions);
        updateCrosswordAnswer(answers);
    }
}

export const useLeblancActivityClick = () => {
    const { stateReset } = useReset();

    const {
        updateLeblancActivityName,
        updateLeblancActivityAvailable,
        updateLeblancActivityEffect,
    } = useInfo();

    return (name, available, effect) => {
        stateReset();

        updateLeblancActivityName(name);
        updateLeblancActivityAvailable(available);
        updateLeblancActivityEffect(effect);
    }
}

export const useHomeShoppingClick = () => {
    const { stateReset } = useReset();

    const {
        updateHomeShoppingDates,
        updateHomeShoppingItemA,
        updateHomeShoppingPriceA,
        updateHomeShoppingItemB,
        updateHomeShoppingPriceB,
    } = useInfo();

    return (homeShopping) => {
        stateReset();

        const date = homeShopping.map(homeShopping => homeShopping.date);
        const itemA = homeShopping.map(homeShopping => homeShopping.itemA);
        const priceA = homeShopping.map(homeShopping => homeShopping.priceA);
        const itemB = homeShopping.map(homeShopping => homeShopping.itemB);
        const priceB = homeShopping.map(homeShopping => homeShopping.priceB);

        updateHomeShoppingDates(date);
        updateHomeShoppingItemA(itemA);
        updateHomeShoppingPriceA(priceA);
        updateHomeShoppingItemB(itemB);
        updateHomeShoppingPriceB(priceB);
    }
}

export const useTVQuizClick = () => {
    const { stateReset } = useReset();

    const {
        updateQuizDates,
        updateQuizAnswers,
    } = useInfo();

    return (TVQuiz) => {
        stateReset();

        const date = TVQuiz.map(TVQuiz => TVQuiz.date);
        const answer = TVQuiz.map(TVQuiz => TVQuiz.answer);

        updateQuizDates(date);
        updateQuizAnswers(answer);
    }
}

export const useClassroomQuestionClick = () => {
    const { stateReset } = useReset();

    const {
        updateClassroomQuestionDates,
        updateClassroomQuestionAnswers,
    } = useInfo();

    return (question) => {
        stateReset();

        const date = question.map(question => question.date);
        const answer = question.map(question => question.answer);

        updateClassroomQuestionDates(date);
        updateClassroomQuestionAnswers(answer);
    }
}

export const useFacilityClick = () => {
    const { stateReset } = useReset();

    const {
        updateFacilityName,
        updateFacilityAvailable,
        updateFacilityEffect,
    } = useInfo();

    return (name, available, effect) => {
        stateReset();

        updateFacilityName(name);
        updateFacilityAvailable(available);
        updateFacilityEffect(effect);
    }
}