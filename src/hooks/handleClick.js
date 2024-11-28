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
    searchCrosswordDates,
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
    } = useInfo();

    const [clicked, setClicked] = useState(false);
  
    const handleClick = () => {
        setClicked((prevClicked) => !prevClicked);
        if (dateNumber > 0) {
            stateReset();
            updateDate(`${monthIndex}/${dateNumber}`);
            const activityList = [
                ...searchByWeekday(monthIndex, dateNumber, weekday),
                ...searchByDate(`${monthIndex}/${dateNumber}`),
                ...searchByExtraDate(`${monthIndex}/${dateNumber}`),
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
    } = useInfo();

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        stateReset();

        updateDate(activityName);
        const dateList = searchByActivity(activityName);
        const startDate = searchStartDateByActivity(activityName);
        const endDate = searchEndDateByActivity(activityName);
        const details = searchDetailsByActivity(activityName);

        updateActivityDates(dateList);
        updateActivityStartDate([`${startDate.month}/${startDate.day}`]);
        updateActivityEndDate([`${endDate.month}/${endDate.day}`]);
        updateActivityDetails(details);
    }

    return { clicked, handleClick };
}

export const BookDVDGameClick = (name, chapters, effect, description, price, location, available) => {
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

    const handleClick = () => {
        stateReset();

        updateBookdvdgameName(name);
        updateBookdvdgameChapters(chapters);
        updateBookdvdgameEffect(effect);
        updateBookdvdgameDescription(description);
        updateBookdvdgamePrice(price);
        updateBookdvdgameLocation(location);
        updateBookdvdgameAvailable(available);
    }

    return { handleClick };
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