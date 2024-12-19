import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

const AccordionCustom = ({headerImg, renderContent}) => {
    return (
        <Accordion
            sx={{
                width: '100%',
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
                sx={{
                    backgroundImage: headerImg,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    aspectRatio: '4 / 1',
                    boxSizing: 'border-box',
                    overflow: 'hidden',
                    padding: '0',
                    transition: 'all 0.3s ease',
                    '&.Mui-expanded': {
                        aspectRatio: '4 / 1',
                        minHeight: 'unset',
                    },
                    '& .MuiAccordionSummaryContent': {
                        margin: '0',
                        alignItems: 'center',
                        transition: 'none',
                    }
                }}
            >
            </AccordionSummary>
            <AccordionDetails className='accordion-details-custom'>
                {renderContent && renderContent()}
            </AccordionDetails>
        </Accordion>
    )
}

export default AccordionCustom;