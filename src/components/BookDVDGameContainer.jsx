import React from 'react';
import { dateClick } from '../hooks/handleClick.js';

const BookDVDGameContainer = ({itemIcon, name}) => {

    return (
        <div className="book-dvd-game-container">
            <img
                className="book-dvd-game-icon"
                src={itemIcon}>
            </img>
            <h1 className="book-dvd-game-name">{name}</h1>
        </div>
    );
}

export default BookDVDGameContainer;