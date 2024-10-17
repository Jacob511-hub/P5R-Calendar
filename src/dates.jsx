import React, { useState } from 'react';
import { rows, cols, tileSkewPattern, shadowSkewPattern } from './monthData.js'
import { dateClick } from './handleClick.js';

const Dates = ( {monthIndex, dateNumbers, dateKeys, onClick} ) => {
    const gridItems = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const tileSkewX = tileSkewPattern[row][col];
        const tileSkewY = tileSkewPattern[row][col];
        const shadowSkewX = shadowSkewPattern[row][col];
        const shadowSkewY = shadowSkewPattern[row][col];

        const dateType = dateKeys[row][col];
        const dateNumber = dateNumbers[row][col];
        const classTile = `grid-tile ${dateType}-tile`;
        const classShadow = `grid-shadow ${dateType}-shadow`;

        const {clicked, handleClick} = dateClick(monthIndex, dateNumber, onClick);

        const tileStyle = {
            transform: `skew(${tileSkewX}deg, ${tileSkewY}deg)`,
        }

        const shadowStyle = {
            transform: `skew(${shadowSkewX}deg, ${shadowSkewY}deg)`,
            // backgroundColor: clicked ? "#1bfffe" : "#000000",
        }
  
        gridItems.push(
          <div key={`${row}-${col}`} className="grid-item" onClick={handleClick}>
            <h1 className="date-number">{dateNumber}</h1>
            <div className={classTile} style={tileStyle}></div>
            <div className={classShadow} style={shadowStyle}></div>
          </div>
        );
      }
    }
    return gridItems;
};

export default Dates;