import React, { useState } from "react";
import { useEffect } from "react";
import Divider from "@mui/material/Divider";

/*
  ! It seems like the the startDisplay and the display are using the same logic for their conditional rendering. Consider using a helper function to avoid repeating the same logic twice. This will make the code easier to read and maintain.
*/

const Info = ({
  dateDisplay,
  weekdayDisplay,
  activityStartDisplay,
  activityDisplay,
}) => {
  return (
    <div className="info-display">
      <img className="dagger" src="src/assets/dagger.png"></img>
      <div className="info-date">
        <h1 id="date-display">{dateDisplay}</h1>
        <h1 id="weekday-display">{weekdayDisplay}</h1>
      </div>
      {activityStartDisplay.length > 0 ? (
        <>
          <h1 id="start-header">Start</h1>
          {/* 
                        Similar to the Accordion, if this Divider style is going to be reused, it is worth it to make a custom Divider component that uses the MUI Divider within it and adds your styles. This way you can reuse the component and not have to repeat the styles each time you use it.
                    */}
          <Divider
            variant="middle"
            style={{
              borderColor: "white",
            }}
          />
          {activityStartDisplay.length > 0 ? (
            <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
              {activityStartDisplay.map((name, index) => (
                <h2 key={index}>{name}</h2>
              ))}
            </ul>
          ) : (
            //! Avoid rendering empty <p> tags. They don't add any value to the UI and can be confusing for developers reading the code. If there is no content to display, you can likely return null or an empty string.
            <p></p>
          )}
          <Divider
            variant="middle"
            style={{
              borderColor: "white",
            }}
          />
        </>
      ) : (
        <p></p>
      )}
      {activityDisplay.length > 0 ? (
        <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
          {activityDisplay.map((name, index) => (
            <h2 key={index}>{name}</h2>
          ))}
        </ul>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Info;
