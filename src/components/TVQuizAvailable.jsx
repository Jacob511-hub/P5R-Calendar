import React from 'react';
import DividerCustom from './dividerCustom';
import { useInfo } from '../components/CalendarContext';

const TVQuizAvailable = () => {
    const {
        quizAvailable
    } = useInfo();

    return (
        <>
            {quizAvailable ? (
                <>
                    <h1 style={{fontSize: '2.2em'}}>TV Quiz Available!</h1>
                    <DividerCustom />
                </>
            ) : (
                <p style={{ margin: 0 }}></p>
            )}
        </>
    )
};

export default TVQuizAvailable;