import React from 'react';
import Checkbox from './Checkbox';

const BookDVDGameContainer = ({ itemIcon, item, handleClick, toggleChecked }) => {
    return (
        <div className="book-dvd-game-container" onClick={handleClick}>
            <img
            className="book-dvd-game-icon"
            src={itemIcon}
            />
            <h1 className="book-dvd-game-name">{item.name}</h1>
            <Checkbox checked={item.checked} toggleChecked={toggleChecked} />
        </div>
    );
  };

export default BookDVDGameContainer;