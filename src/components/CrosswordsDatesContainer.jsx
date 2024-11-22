import React from 'react';
import { CrosswordDatesClick } from '../hooks/handleClick';

const CrosswordDatesContainer = ({text, dates}) => {
    const { handleClick } = CrosswordDatesClick(dates);

    return (
        <div className="book-dvd-game-container" onClick={handleClick}>
            <h1 className="book-dvd-game-name">{text}</h1>
        </div>
    );
}

export default CrosswordDatesContainer;