import React from 'react';
import DividerCustom from './dividerCustom';
import { useInfo } from '../components/CalendarContext';

const CrosswordDatesInfo = () => {
    const {
        crosswordDates
    } = useInfo();

    return (
        <>
        {crosswordDates !== "" ? (
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
                    }}>Crossword Dates</h1>
                </div>
                <DividerCustom />
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                        {crosswordDates.map((name, index) => (
                            <h2 key={index}>{name}</h2>
                        ))}
                    </ul>
                <DividerCustom />
            </>
            ) : (
                <p style={{ margin: 0 }}></p>
            )}
        </>
    )
};

export default CrosswordDatesInfo;