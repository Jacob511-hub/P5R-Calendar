import React from 'react';
import DividerCustom from './dividerCustom';
import { useInfo } from '../components/CalendarContext';

const CrosswordSolutionsInfo = () => {
    const {
        crosswordQuestion,
        crosswordAnswer
    } = useInfo();
    
    if (crosswordQuestion === "") {
        return null;
    }

    return (
        <>
            <>
                <div className="info-header-container"
                style={{
                    minHeight: 'unset',
                    maxHeight: 'unset',
                    minWidth: 'unset',
                    maxWidth: 'unset',
                    top: '0px',
                }}>
                    <h1 className='info-header'
                    style={{
                        fontSize: '2.5em'
                    }}>Crossword Solutions</h1>
                </div>
                <DividerCustom />
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                    {crosswordQuestion.map((question, index) => (
                        <div key={index}>
                            <h2>{question}</h2>
                            <h3>{crosswordAnswer[index]}</h3>
                            <DividerCustom />
                        </div>
                    ))}
                </ul>
            </>
        </>
    )
};

export default CrosswordSolutionsInfo;