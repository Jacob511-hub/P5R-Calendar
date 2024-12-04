import React from 'react';
import Checkbox from './Checkbox';

const BookDVDGameContainer = ({itemIcon, item, handleClick}) => {
    return (
        <div className="book-dvd-game-container" onClick={handleClick}>
            <img
                className="book-dvd-game-icon"
                src={itemIcon}>
            </img>
            <h1 className="book-dvd-game-name">{item.name}</h1>
            <Checkbox />
        </div>
    );
}

export default BookDVDGameContainer;