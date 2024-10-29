import React, { useState } from "react";
import { useEffect } from "react";

//! consolidate imports ex: import { useState, useEffect } from 'react';

import Dates from "./dates.jsx";
import { monthHeader, dateKeys, dateNumbers } from "../hooks/monthData.js";

const Months = ({
  onClick,
  activitiesUpdate,
  weekdayUpdate,
  activitiesStartUpdate,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextImage = () => {
    if (currentIndex < monthHeader.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPreviousImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft" && currentIndex > 0) {
        goToPreviousImage();
      } else if (
        event.key === "ArrowRight" &&
        currentIndex < monthHeader.length - 1
      ) {
        goToNextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, goToPreviousImage, goToNextImage, monthHeader.length]);

  const monthIndex = (4 + currentIndex) % 12 || 12;

  return (
    <div className="calendar">
      <img className="dagger" src="src/assets/dagger.png"></img>
      <div id="calendar-header">
        <span
          className={`icon-prev ${currentIndex === 0 ? "disabled" : ""}`}
          onClick={goToPreviousImage}
        >
          &#x276E;
        </span>
        <img
          className="month-name"
          src={monthHeader[currentIndex]}
          alt={`${currentIndex + 1}`}
        ></img>
        <span
          className={`icon-next ${
            currentIndex === monthHeader.length - 1 ? "disabled" : ""
          }`}
          onClick={goToNextImage}
        >
          &#x276F;
        </span>
      </div>
      <div className="grid-container">
        <Dates
          monthIndex={monthIndex}
          dateNumbers={dateNumbers[currentIndex]}
          dateKeys={dateKeys[currentIndex]}
          onClick={onClick}
          activitiesUpdate={activitiesUpdate}
          weekdayUpdate={weekdayUpdate}
          activitiesStartUpdate={activitiesStartUpdate}
        />
      </div>
    </div>
  );
};

export default Months;
