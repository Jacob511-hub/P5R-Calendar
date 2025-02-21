import React from 'react';
import DividerCustom from './dividerCustom';
import { useInfo } from '../components/CalendarContext';

const ExamAvailable = () => {
    const {
        examAvailable
    } = useInfo();

    return (
        <>
            {examAvailable ? (
                <>
                    <h1 style={{fontSize: '2.2em'}}>Exams</h1>
                    <DividerCustom />
                </>
            ) : (
                <p style={{ margin: 0 }}></p>
            )}
        </>
    )
};

export default ExamAvailable;