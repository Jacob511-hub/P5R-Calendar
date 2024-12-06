import React, { useState } from 'react';
import daggerImage from '../assets/dagger.png';
import bookIcon from '../assets/book-icon.png';
import dvdIcon from '../assets/dvd-icon.png';
import gameIcon from '../assets/game-icon.png';
import AccordionCustom from './accordionCustom';
import DividerCustom from './dividerCustom';
import ConfidantContainer from './confidantContainer';
import BookDVDGameContainer from './BookDVDGameContainer';
import ActivityContainerBasic from './ActivityContainerBasic.jsx';
import FilteredList from './FilteredList.jsx';

import { tarot, tarotNames } from '../hooks/confidantassets';
import { jobs } from '../hooks/jobs';
import { leblancActivities } from '../hooks/leblanc';
import { crosswordDates, crosswords } from '../hooks/crosswords';
import { TVQuizAnswers } from '../hooks/quizAnswers.js';
import { HomeShoppingProgramItems } from '../hooks/homeShopping.js';
import { ClassroomQuestions } from '../hooks/classroom.js';
import { facilities } from '../hooks/facilities.js';

import { useInfo } from '../components/CalendarContext';
import { useBookDVDGameClick, useJobClick, useCrosswordDatesClick, useCrosswordSolutionsClick, useLeblancActivityClick, useHomeShoppingClick, useTVQuizClick, useClassroomQuestionClick, useFacilityClick } from '../hooks/handleClick.js';

const Activities = () => {
    const {
        filter,
        books,
        setBooks,
        dvds,
        setDvds,
        games,
        setGames,
    } = useInfo();

    const BookDVDGameClick = useBookDVDGameClick();
    const jobClick = useJobClick();
    const crosswordDatesClick = useCrosswordDatesClick();
    const crosswordSolutionsClick = useCrosswordSolutionsClick();
    const leblancActivityClick = useLeblancActivityClick();
    const homeShoppingClick = useHomeShoppingClick();
    const TVQuizClick = useTVQuizClick();
    const classroomQuestionClick = useClassroomQuestionClick();
    const facilityClick = useFacilityClick();

    const handleBookDVDGameClick = (bookdvdgame) => () => {
        BookDVDGameClick(bookdvdgame.name, bookdvdgame.chapters, bookdvdgame.effect, bookdvdgame.description, bookdvdgame.price, bookdvdgame.location, bookdvdgame.available);
    };

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
    };

    const handleTVQuizClick = (item) => () => {
        TVQuizClick(item);
    };

    const handleClassroomQuestionClick = (item) => () => {
        classroomQuestionClick(item);
    };

    const handleFacilityClick = (item) => () => {
        facilityClick(item.name, item.available, item.effects);
    };

    const toggleChecked = (itemName, category) => {
        const updateItems = (items, setItems, storageKey) => {
          const updatedItems = items.map((item) => 
            item.name === itemName ? { ...item, checked: !item.checked } : item
          );
          setItems(updatedItems);
          localStorage.setItem(storageKey, JSON.stringify(updatedItems));
        };
      
        if (category === 'books') {
          updateItems(books, setBooks, 'books');
        } else if (category === 'dvds') {
          updateItems(dvds, setDvds, 'dvds');
        } else if (category === 'games') {
          updateItems(games, setGames, 'games');
        }
      };

    return (
        <>
            <div className="activities-container">
                <img
                    className="dagger"
                    src={daggerImage}>
                </img>
                <div className="activities-display">
                    <img src="src/assets/activities.png"></img>
                    <DividerCustom />
                    {filter.length === 0 ? (
                        <div>
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
                                            handleClick={handleBookDVDGameClick(book)}
                                            toggleChecked={() => toggleChecked(book.name, 'books')}
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
                                            handleClick={handleBookDVDGameClick(dvd)}
                                            toggleChecked={() => toggleChecked(dvd.name, 'dvds')}
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
                                            handleClick={handleBookDVDGameClick(game)}
                                            toggleChecked={() => toggleChecked(game.name, 'games')}
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
                                headerImg={'url("src/assets/classroom.png")'}
                                renderContent={() => (
                                    <>
                                        <ActivityContainerBasic
                                            name={"Classroom Questions"}
                                            handleClick={handleClassroomQuestionClick(ClassroomQuestions)}
                                        />
                                        <ActivityContainerBasic
                                            name={"Exams"}
                                            handleClick={null}
                                        />
                                    </>
                                )}
                            />
                            <AccordionCustom
                                headerImg={'url("src/assets/facilities.png")'}
                                renderContent={() => (
                                    facilities.map((facility) => (
                                        <ActivityContainerBasic
                                            key={facility.name}
                                            name={facility.name}
                                            handleClick={handleFacilityClick(facility)}
                                        />
                                    ))
                                )}
                            />
                        </div>
                    ) : (
                        <div>
                            <FilteredList filter={filter} />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Activities;