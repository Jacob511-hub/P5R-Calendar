import React from 'react';
import { dateClick } from '../hooks/handleClick.js';

const BookDVDGameContainer = ({itemIcon, name}) => {
    const {clicked, handleClick} = dateClick(0, "", 0, "", "");

    return (
        <div className="book-dvd-game-container" onClick={handleClick}>
            <img
                className="book-dvd-game-icon"
                src={itemIcon}>
            </img>
            <h1 className="book-dvd-game-name">{name}</h1>
        </div>
    );
}

export default BookDVDGameContainer;