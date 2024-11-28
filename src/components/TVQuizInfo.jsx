import React from 'react';
import DividerCustom from './dividerCustom';
import { useInfo } from '../components/CalendarContext';

const TVQuizInfo = () => {
    const {
        quizDates,
        quizAnswers,
    } = useInfo();

    return (
        <>
            {quizDates !== "" ? (
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
                        }}>TV Quiz Answers</h1>
                    </div>
                    <DividerCustom />
                    
                    {/* <h1 className='info-header'>{quizDates}</h1> */}
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
            ) : (
                <p style={{ margin: 0 }}></p>
            )}
        </>
    )
};

export default TVQuizInfo;