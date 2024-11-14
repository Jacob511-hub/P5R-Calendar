import React from 'react';
import { BookDVDGameClick } from '../hooks/handleClick.js';

const BookDVDGameContainer = ({itemIcon, item}) => {
    const { handleClick } = BookDVDGameClick(item.name, item.chapters, item.effect, item.description, item.price, item.location, item.available);

    return (
        <div className="book-dvd-game-container" onClick={handleClick}>
            <img
                className="book-dvd-game-icon"
                src={itemIcon}>
            </img>
            <h1 className="book-dvd-game-name">{item.name}</h1>
        </div>
    );
}

export default BookDVDGameContainer;