import React from "react";

//! clean up unused props
const GridItem = ({
  row,
  col,
  dateNumber,
  dateType,
  tileSkewX,
  tileSkewY,
  shadowSkewX,
  shadowSkewY,
  weekday,
  clicked,
  handleClick,
}) => {
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
    //! React's key prop is only necessary when elements are created in a list or mapped collection. In this case, the ey prop is already set in the parent component when the GridItem is rendered and therefore isn't needed here.
    <div key={`${row}-${col}`} className="grid-item" onClick={handleClick}>
      <h1 className="date-number">{dateNumber}</h1>
      <div className={classTile} style={tileStyle}></div>
      <div className={classShadow} style={shadowStyle}></div>
    </div>
  );
};

export default GridItem;
