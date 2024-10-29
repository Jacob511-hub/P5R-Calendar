import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Divider from "@mui/material/Divider";
import ConfidantContainer from "./confidantContainer";
import { tarot, tarotNames } from "../hooks/confidantassets";

const Activities = ({ onClick, activitiesUpdate, weekdayUpdate }) => {
  return (
    <div className="activities-container">
      <img
        className="dagger"
        //! Hardcoded src paths should be avoided as it ties the component to a specific file structure. use "../assets/dagger.png" instead for relative paths and to avoid issues when the project is built. These could also be included in your imports at the top of the file. ex: import daggerImage from '../assets/dagger.png'; and then <img src={daggerImage} alt="dagger" />
        src="src/assets/dagger.png"
      ></img>
      <div className="activities-display">
        <img src="src/assets/activities.png"></img>
        <Divider
          variant="middle"
          style={{
            borderColor: "white",
          }}
        />
        {/* 
         ! If this Accordian is going to be used in multiple places it is worth it to make your own custom Accordion component that uses the MUI Accordion within it and adds your styles. This way you can reuse the component and not have to repeat the styles each time you use it.
        */}
        <Accordion
          style={{
            backgroundColor: "transparent", // Make the entire accordion transparent
            boxShadow: "none", // Remove box shadow
            color: "white",
          }}
        >
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{
              backgroundImage: 'url("src/assets/confidants.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "75px",
            }}
          ></AccordionSummary>
          <AccordionDetails>
            {/* 
                No need to use Array.from to create an array of the same length. You can just use the tarot array directly.
                {tarot.map((tarotCard, index) => (
                    <ConfidantContainer
                        key={index}
                        tarot={tarotCard}
                        name={tarotNames[index]}
                        onClick={onClick}
                        activitiesUpdate={activitiesUpdate}
                        weekdayUpdate={weekdayUpdate}
                    />
                ))}

                It is also generally not recommended to use the index as the key for a list of components. If the order of the list changes, it can cause issues with React's reconciliation process. If you have a unique identifier for each item in the list, it is better to use that as the key. If you don't have a unique identifier, you can use the index as a last resort, but be aware of the potential issues.
            */}
            {Array.from({ length: tarot.length }).map((_, index) => (
              <ConfidantContainer
                key={index}
                tarot={tarot[index]}
                name={tarotNames[index]}
                onClick={onClick}
                activitiesUpdate={activitiesUpdate}
                weekdayUpdate={weekdayUpdate}
              />
            ))}
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Activities;
