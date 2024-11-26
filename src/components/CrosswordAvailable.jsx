import React from 'react';
import DividerCustom from './dividerCustom';
import { useInfo } from '../components/CalendarContext';

const CrosswordAvailable = () => {
    const {
        crosswordAvailable
    } = useInfo();

    return (
        <>
            {crosswordAvailable ? (
                <>
                    <h1 style={{fontSize: '2.2em'}}>Crossword Available!</h1>
                    <DividerCustom />
                </>
            ) : (
                <p style={{ margin: 0 }}></p>
            )}
        </>
    )
};

export default CrosswordAvailable;