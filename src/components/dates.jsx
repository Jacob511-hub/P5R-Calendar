import React, { useState } from 'react';
import { rows, cols, tileSkewPattern, shadowSkewPattern } from '../hooks/monthData.js'
import { dateClick } from '../hooks/handleClick.js';
import GridItem from './gridItem';

const Dates = ( {monthIndex, dateNumbers, dateKeys, onClick, activitiesUpdate} ) => {
    const gridItems = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const tileSkewX = tileSkewPattern[row][col];
        const tileSkewY = tileSkewPattern[row][col];
        const shadowSkewX = shadowSkewPattern[row][col];
        const shadowSkewY = shadowSkewPattern[row][col];

        const dateType = dateKeys[row][col];
        const dateNumber = dateNumbers[row][col];

        const {clicked, handleClick} = dateClick(monthIndex, dateNumber, "", onClick, activitiesUpdate);
        
        gridItems.push(
          <GridItem
              key={`${row}-${col}`}
              row={row}
              col={col}
              dateNumber={dateNumber}
              dateType={dateType}
              tileSkewX={tileSkewX}
              tileSkewY={tileSkewY}
              shadowSkewX={shadowSkewX}
              shadowSkewY={shadowSkewY}
              clicked={clicked}
              handleClick={handleClick}
          />
      );
      }
    }
    return gridItems;
};

export default Dates;