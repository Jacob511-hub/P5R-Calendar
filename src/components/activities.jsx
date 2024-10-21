import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Divider from '@mui/material/Divider';
import ConfidantContainer from './confidantContainer';
import { tarot, tarotNames } from '../hooks/confidantassets';

const Activities = ({ onClick }) => {
    return (
        <div className="activities-container">
            <img
                className="dagger"
                src="src/assets/dagger.png">
            </img>
            <div className="activities-display">
                <img src="src/assets/activities.png"></img>
                <Divider variant="middle" 
                    style={{
                        borderColor: 'white',
                    }}
                />
                <Accordion
                    style={{
                        backgroundColor: 'transparent', // Make the entire accordion transparent
                        boxShadow: 'none', // Remove box shadow
                        color: 'white'
                    }}
                  >
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        style={{
                            backgroundImage: 'url("src/assets/confidants.png")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '75px'
                        }}
                    >
                    </AccordionSummary>
                    <AccordionDetails>
                        {Array.from({ length: tarot.length }).map((_, index) => (
                            <ConfidantContainer 
                                key={index}
                                tarot={tarot[index]}
                                name={tarotNames[index]}
                                onClick={onClick}
                            />
                        ))}
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}

export default Activities;