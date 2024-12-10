import React from 'react';
import DividerCustom from './dividerCustom';
import { useInfo } from '../components/CalendarContext';

const ClassroomQuestionAvailable = () => {
    const {
        classroomQuestionAvailable
    } = useInfo();

    return (
        <>
            {classroomQuestionAvailable ? (
                <>
                    <h1 style={{fontSize: '2.2em'}}>Classroom Question!</h1>
                    <DividerCustom />
                </>
            ) : (
                <p style={{ margin: 0 }}></p>
            )}
        </>
    )
};

export default ClassroomQuestionAvailable;