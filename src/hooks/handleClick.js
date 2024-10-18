import React, { useState } from 'react';

export function dateClick(monthIndex, dateNumber, onClick) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked((prevClicked) => !prevClicked);
        if (dateNumber > 0) {
            onClick(monthIndex + "/" + dateNumber);
        }
        else {
            onClick("");
        }
    };

    return {clicked, handleClick};
}