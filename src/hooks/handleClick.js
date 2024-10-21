import React, { useState } from 'react';

export function dateClick(monthIndex, dateNumber, activityName, onClick) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked((prevClicked) => !prevClicked);
        if (dateNumber > 0) {
            onClick(monthIndex + "/" + dateNumber);
        }
        else if (dateNumber === 0) {
            onClick(activityName);
        }
        else {
            onClick("");
        }
    };

    return {clicked, handleClick};
}