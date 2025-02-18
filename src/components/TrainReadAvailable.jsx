import React from 'react';
import DividerCustom from './dividerCustom';
import { useInfo } from '../components/CalendarContext';

const TrainReadAvailable = () => {
    const {
        trainReadAvailable
    } = useInfo();

    return (
        <>
            {trainReadAvailable ? (
                <>
                    <h1 style={{fontSize: '2.2em'}}>Read on the Train!</h1>
                    <DividerCustom />
                </>
            ) : (
                <p style={{ margin: 0 }}></p>
            )}
        </>
    )
};

export default TrainReadAvailable;