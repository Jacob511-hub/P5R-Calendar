import React, { useState } from 'react';

import daggerImage from '../assets/dagger.png';
import bookIcon from '../assets/book-icon.png';
import dvdIcon from '../assets/dvd-icon.png';
import gameIcon from '../assets/game-icon.png';
import activityImage from '../assets/activities.png';
import confidantsImage from '../assets/confidants.png';
import booksImage from '../assets/books.png';
import dvdsImage from '../assets/dvds.png';
import gamesImage from '../assets/games.png';
import jobsImage from '../assets/jobs.png';
import leblancImage from '../assets/leblanc.png';
import crosswordImage from '../assets/crossword.png';
import tvImage from '../assets/tv.png';
import classroomImage from '../assets/classroom.png';
import facilitiesImage from '../assets/facilities.png';

import AccordionCustom from './accordionCustom';
import DividerCustom from './dividerCustom';
import ConfidantContainer from './confidantContainer';
import BookDVDGameContainer from './BookDVDGameContainer';
import ActivityContainerBasic from './ActivityContainerBasic.jsx';
import FilteredList from './FilteredList.jsx';

import { jobs } from '../hooks/jobs';
import { leblancActivities } from '../hooks/leblanc';
import { crosswordDates, crosswords } from '../hooks/crosswords';
import { TVQuizAnswers } from '../hooks/quizAnswers.js';
import { HomeShoppingProgramItems } from '../hooks/homeShopping.js';
import { ClassroomQuestions, ExamAnswers, ChalkDates, SlackOffDates } from '../hooks/classroom.js';
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

        confidants,
        setConfidants,
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
        facilityClick(item.name, item.availability, item.effects);
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

    const toggleRank = (itemName, index) => {
        const updateItems = (items, storageKey) => {
            const updatedItems = items.map((item) => {
                if (item.name === itemName) {
                    return {
                        ...item,
                        rank: index + 1
                    };
                }
                return item;
            });
            
            setConfidants(updatedItems);
            localStorage.setItem(storageKey, JSON.stringify(updatedItems));
        };
    
        updateItems(confidants, 'confidants');
    };

    return (
        <>
            <div className="activities-container">
                <img
                    className="dagger"
                    src={daggerImage}>
                </img>
                <div className="activities-display">
                    <img src={activityImage}></img>
                    <DividerCustom />
                    {filter.length === 0 ? (
                        <div>
                            <AccordionCustom
                                headerImg={`url(${confidantsImage})`}
                                renderContent={() => (
                                    confidants.map((confidant) => (
                                        <ConfidantContainer
                                            key={confidant.name}
                                            tarot={confidant.tarot}
                                            name={confidant.name}
                                            item={confidant}
                                            toggleRank={toggleRank}
                                        />
                                    ))
                                )}
                            />
                            <AccordionCustom
                                headerImg={`url(${booksImage})`}
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
                                headerImg={`url(${dvdsImage})`}
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
                                headerImg={`url(${gamesImage})`}
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
                                headerImg={`url(${jobsImage})`}
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
                                headerImg={`url(${leblancImage})`}
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
                                headerImg={`url(${crosswordImage})`}
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
                                headerImg={`url(${tvImage})`}
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
                                headerImg={`url(${classroomImage})`}
                                renderContent={() => (
                                    <>
                                        <ActivityContainerBasic
                                            name={"Classroom Questions"}
                                            handleClick={handleClassroomQuestionClick(ClassroomQuestions)}
                                        />
                                        <ActivityContainerBasic
                                            name={"Exams"}
                                            handleClick={handleClassroomQuestionClick(ExamAnswers)}
                                        />
                                        <ActivityContainerBasic
                                            name={"Chalk Throws"}
                                            handleClick={handleCrosswordDatesClick(ChalkDates)}
                                        />
                                        <ActivityContainerBasic
                                            name={"Slack Off/Free Time"}
                                            handleClick={handleCrosswordDatesClick(SlackOffDates)}
                                        />
                                    </>
                                )}
                            />
                            <AccordionCustom
                                headerImg={`url(${facilitiesImage})`}
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