import React from 'react';
import DividerCustom from './dividerCustom';
import { useInfo } from '../components/CalendarContext';

const TVQuizInfo = () => {
    const {
        quizDates,
        quizAnswers,
    } = useInfo();

    if (quizDates === "") {
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
                    <h1 className='info-header info-header-alt'>TV Quiz Answers</h1>
                </div>
                <DividerCustom />
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                    {quizDates.map((date, index) => (
                        <div key={index}>
                            <h2>{date}</h2>
                            <h3>{quizAnswers[index]}</h3>
                            <DividerCustom />
                        </div>
                    ))}
                </ul>
            </>
        </>
    )
};

export default TVQuizInfo;