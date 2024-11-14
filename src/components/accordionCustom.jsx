import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

const AccordionCustom = ({headerImg, renderContent}) => {
    return (
        <Accordion
            sx={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                color: 'white',
                '&::before': {
                    position: 'unset'
                }
            }}
        >
            <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{
                    backgroundImage: headerImg,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '75px'
                }}
            >
            </AccordionSummary>
            <AccordionDetails>
                {renderContent && renderContent()}
            </AccordionDetails>
        </Accordion>
    )
}

export default AccordionCustom;