import React from 'react';
import daggerImage from '../assets/dagger.png';
import bookIcon from '../assets/book-icon.png';
import dvdIcon from '../assets/dvd-icon.png';
import gameIcon from '../assets/game-icon.png';
import AccordionCustom from './accordionCustom';
import DividerCustom from './dividerCustom';
import ConfidantContainer from './confidantContainer';
import BookDVDGameContainer from './BookDVDGameContainer';
import ActivityContainerBasic from './ActivityContainerBasic.jsx';

import { tarot, tarotNames } from '../hooks/confidantassets';
import { books, dvds, games } from '../hooks/bookdvdgame';
import { jobs } from '../hooks/jobs';
import { leblancActivities } from '../hooks/leblanc';
import { crosswordDates, crosswords } from '../hooks/crosswords';
import { TVQuizAnswers } from '../hooks/quizAnswers.js';
import { HomeShoppingProgramItems } from '../hooks/homeShopping.js';

import { useJobClick, useCrosswordDatesClick, useCrosswordSolutionsClick, useLeblancActivityClick, useHomeShoppingClick, useTVQuizClick } from '../hooks/handleClick.js';

const Activities = () => {
    const jobClick = useJobClick();
    const crosswordDatesClick = useCrosswordDatesClick();
    const crosswordSolutionsClick = useCrosswordSolutionsClick();
    const leblancActivityClick = useLeblancActivityClick();
    const homeShoppingClick = useHomeShoppingClick();
    const TVQuizClick = useTVQuizClick();

    const handleJobClick = (job) => () => {
        jobClick(job.name, job.requirements, job.pay, job.stats, job.bonus, job.unlocks);
    };

    const handleCrosswordDatesClick = (date) => () => {
        crosswordDatesClick(date);
    };

    const handleCrosswordSolutionsClick = (crosswords) => () => {
        crosswordSolutionsClick(crosswords);
    };

    const handleLeblancActivityClick = (item) => () => {
        leblancActivityClick(item.name, item.available, item.effects);
    };

    const handleHomeShoppingClick = (item) => () => {
        homeShoppingClick(item);
    }

    const handleTVQuizClick = (item) => () => {
        TVQuizClick(item);
    };

    return (
        <div className="activities-container">
            <img
                className="dagger"
                src={daggerImage}>
            </img>
            <div className="activities-display">
                <img src="src/assets/activities.png"></img>
                <DividerCustom />
                <AccordionCustom
                    headerImg={'url("src/assets/confidants.png")'}
                    renderContent={() => (
                        tarot.map((tarotCard, index) => (
                            <ConfidantContainer
                                key={tarotCard}
                                tarot={tarotCard}
                                name={tarotNames[index]}
                            />
                        ))
                    )}
                />
                <AccordionCustom
                    headerImg={'url("src/assets/books.png")'}
                    renderContent={() => (
                        books.map((book) => (
                            <BookDVDGameContainer
                                key={book.name}
                                itemIcon={bookIcon}
                                item={book}
                            />
                        ))
                    )}
                />
                <AccordionCustom
                    headerImg={'url("src/assets/dvds.png")'}
                    renderContent={() => (
                        dvds.map((dvd) => (
                            <BookDVDGameContainer
                                key={dvd.name}
                                itemIcon={dvdIcon}
                                item={dvd}
                            />
                        ))
                    )}
                />
                <AccordionCustom
                    headerImg={'url("src/assets/games.png")'}
                    renderContent={() => (
                        games.map((game) => (
                            <BookDVDGameContainer
                                key={game.name}
                                itemIcon={gameIcon}
                                item={game}
                            />
                        ))
                    )}
                />
                <AccordionCustom
                    headerImg={'url("src/assets/jobs.png")'}
                    renderContent={() => (
                        jobs.map((job) => (
                            <ActivityContainerBasic
                                key={job.name}
                                name={job.name}
                                handleClick={handleJobClick(job)}
                            />
                        ))
                    )}
                />
                <AccordionCustom
                    headerImg={'url("src/assets/leblanc.png")'}
                    renderContent={() => (
                        leblancActivities.map((leblancActivity) => (
                            <ActivityContainerBasic
                                key={leblancActivity.name}
                                name={leblancActivity.name}
                                handleClick={handleLeblancActivityClick(leblancActivity)}
                            />
                        ))
                    )}
                />
                <AccordionCustom
                    headerImg={'url("src/assets/crossword.png")'}
                    renderContent={() => (
                        <>
                            <ActivityContainerBasic
                                name={"Dates"}
                                handleClick={handleCrosswordDatesClick(crosswordDates)}
                            />
                            <ActivityContainerBasic
                                name={"Solutions"}
                                handleClick={handleCrosswordSolutionsClick(crosswords)}
                            />
                        </>
                    )}
                />
                <AccordionCustom
                    headerImg={'url("src/assets/tv.png")'}
                    renderContent={() => (
                        <>
                            <ActivityContainerBasic
                                name={"TV Shopping"}
                                handleClick={handleHomeShoppingClick(HomeShoppingProgramItems)}
                            />
                            <ActivityContainerBasic
                                name={"TV Quizzes"}
                                handleClick={handleTVQuizClick(TVQuizAnswers)}
                            />
                        </>
                    )}
                />
                <AccordionCustom
                    headerImg={'url("src/assets/facilities.png")'}
                    renderContent=""
                />
            </div>
        </div>
    )
}

export default Activities;