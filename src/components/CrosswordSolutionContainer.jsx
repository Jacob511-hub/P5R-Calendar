import React from 'react';
import { CrosswordSolutionsClick } from '../hooks/handleClick';

const CrosswordSolutionsContainer = ({text, crosswords}) => {
    const { handleClick } = CrosswordSolutionsClick(crosswords);

    return (
        <div className="book-dvd-game-container" onClick={handleClick}>
            <h1 className="book-dvd-game-name">{text}</h1>
        </div>
    );
}

export default CrosswordSolutionsContainer;