import React from 'react';
import DividerCustom from './dividerCustom';
import { useInfo } from '../components/CalendarContext';

const ClassroomInfo = () => {
    const {
        classroomQuestionDates,
        classroomQuestionAnswers,
    } = useInfo();

    if (classroomQuestionDates === "") {
        return null;
    }

    return (
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
                    }}>Classroom Questions</h1>
            </div>
            <DividerCustom />
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                {classroomQuestionDates.map((date, index) => (
                    <div key={index}>
                        <h2>{date}</h2>
                        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                            {classroomQuestionAnswers[index]
                                .split('\n')
                                .map((item, idx) => (
                                    <h3 key={idx}>{item.trim()}</h3>
                                ))}
                        </ul>
                        <DividerCustom />
                    </div>
                ))}
            </ul>
        </>
    );
};

export default ClassroomInfo;