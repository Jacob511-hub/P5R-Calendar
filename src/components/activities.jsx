import React, { useState } from 'react';
import daggerImage from '../assets/dagger.png';
import bookIcon from '../assets/book-icon.png';
import dvdIcon from '../assets/dvd-icon.png';
import gameIcon from '../assets/game-icon.png';
import AccordionCustom from './accordionCustom';
import DividerCustom from './dividerCustom';
import ConfidantContainer from './confidantContainer';
import BookDVDGameContainer from './BookDVDGameContainer';
import JobsContainer from './JobsContainer';
import CrosswordDatesContainer from './CrosswordsDatesContainer';
import { tarot, tarotNames } from '../hooks/confidantassets';
import { books, dvds, games } from '../hooks/bookdvdgame';
import { jobs } from '../hooks/jobs';
import { crosswordDates, crosswords } from '../hooks/crosswords';

const Activities = () => {
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
                            <JobsContainer
                                key={job.name}
                                item={job}
                            />
                        ))
                    )}
                />
                <AccordionCustom
                    headerImg={'url("src/assets/crossword.png")'}
                    renderContent={() => (
                        <CrosswordDatesContainer
                            text={"Dates"}
                            dates={crosswordDates}
                        />
                    )}
                />
                <AccordionCustom
                    headerImg={'url("src/assets/facilities.png")'}
                    renderContent=""
                />
                <AccordionCustom
                    headerImg={'url("src/assets/leblanc.png")'}
                    renderContent=""
                />
            </div>
        </div>
    )
}

export default Activities;