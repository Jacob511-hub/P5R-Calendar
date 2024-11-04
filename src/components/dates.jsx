import React from 'react';
import { rows, cols, tileSkewPattern, shadowSkewPattern, weekdays } from '../hooks/monthData.js'
import { dateClick } from '../hooks/handleClick.js';
import GridItem from './gridItem';

const Dates = ({monthIndex, dateNumbers, dateKeys}) => {
    const gridItems = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const tileSkewX = tileSkewPattern[row][col];
        const tileSkewY = tileSkewPattern[row][col];
        const shadowSkewX = shadowSkewPattern[row][col];
        const shadowSkewY = shadowSkewPattern[row][col];

        const dateType = dateKeys[row][col];
        const dateNumber = dateNumbers[row][col];
        const weekday = weekdays[row][col];

        const {clicked, handleClick} = dateClick(monthIndex, dateType, dateNumber, weekday, "");
        
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
              weekday={weekday}
              clicked={clicked}
              handleClick={handleClick}
          />
      );
      }
    }
    return gridItems;
};

export default Dates;