import React from 'react';

const GridItem = ( {row, col, dateNumber, dateType, tileSkewX, tileSkewY, shadowSkewX, shadowSkewY, weekday, clicked, handleClick} ) => {
    const classTile = `grid-tile ${dateType}-tile`;
    const classShadow = `grid-shadow ${dateType}-shadow`;

    const tileStyle = {
        transform: `skew(${tileSkewX}deg, ${tileSkewY}deg)`,
    };

    const shadowStyle = {
        transform: `skew(${shadowSkewX}deg, ${shadowSkewY}deg)`,
        // backgroundColor: clicked ? "#1bfffe" : "#000000",
    };

    return (
        <div key={`${row}-${col}`} className="grid-item" onClick={handleClick}>
            <h1 className="date-number">{dateNumber}</h1>
            <div className={classTile} style={tileStyle}></div>
            <div className={classShadow} style={shadowStyle}></div>
        </div>
    );
};

export default GridItem;