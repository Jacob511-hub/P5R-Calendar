import React, { useState } from 'react';

const Dates = () => {
    const rows = 5;
    const cols = 7;
  
    const tileSkewPattern = [
      [0, 9, 3, 8, 1, 10, 2],
      [8, 4, 7, 3, 7, 2, 9],
      [0, 9, 3, 8, 1, 10, 2],
      [8, 4, 7, 3, 7, 2, 9],
      [0, 9, 3, 8, 1, 10, 2],
    ];
  
    const shadowSkewPattern = [
      [8, 4, 7, 3, 7, 2, 9],
      [0, 9, 3, 8, 1, 10, 2],
      [8, 4, 7, 3, 7, 2, 9],
      [0, 9, 3, 8, 1, 10, 2],
      [8, 4, 7, 3, 7, 2, 9],
    ];
  
    const gridItems = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const tileSkewX = tileSkewPattern[row][col];
        const tileSkewY = tileSkewPattern[row][col];
        const shadowSkewX = shadowSkewPattern[row][col];
        const shadowSkewY = shadowSkewPattern[row][col];

        const [clicked, setClicked] = useState(false);

        const handleClick = () => {
            setClicked((prevClicked) => !prevClicked);
        };

        const tileStyle = {
            transform: `skew(${tileSkewX}deg, ${tileSkewY}deg)`,
        }

        const shadowStyle = {
            transform: `skew(${shadowSkewX}deg, ${shadowSkewY}deg)`,
            backgroundColor: clicked ? "#1bfffe" : "#000000",
        }
  
        gridItems.push(
          <div key={`${row}-${col}`} className="grid-item" onClick={handleClick}>
            <div className="grid-tile" style={tileStyle}></div>
            <div className="grid-shadow" style={shadowStyle}></div>
          </div>
        );
      }
    }
    return gridItems;
};

export default Dates;