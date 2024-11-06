import React, { useState } from 'react';
import daggerImage from '../assets/dagger.png';
import AccordionCustom from './accordionCustom';
import DividerCustom from './dividerCustom';
import ConfidantContainer from './confidantContainer';
import { tarot, tarotNames } from '../hooks/confidantassets';

const Activities = () => {
    return (
        <div className="activities-container">
            <img
                className="dagger"
                src={daggerImage}>
            </img>
            <div className="activities-display">
                <img src="src/assets/activities.png"></img>
                <DividerCustom />
                <AccordionCustom
                    headerImg={'url("src/assets/confidants.png")'}
                    renderContent={() => (
                        tarot.map((tarotCard, index) => (
                            <ConfidantContainer
                                key={tarotCard}
                                tarot={tarotCard}
                                name={tarotNames[index]}
                            />
                        ))
                    )}
                />
            </div>
        </div>
    )
}

export default Activities;