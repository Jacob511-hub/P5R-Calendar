import React from 'react';
import DividerCustom from './dividerCustom';
import { useInfo } from '../components/CalendarContext';

const ChalkDodgeAvailable = () => {
    const {
        dodgeChalkAvailable
    } = useInfo();

    return (
        <>
            {dodgeChalkAvailable ? (
                <>
                    <h1 style={{fontSize: '2.2em'}}>Dodge the Chalk!</h1>
                    <DividerCustom />
                </>
            ) : (
                <p style={{ margin: 0 }}></p>
            )}
        </>
    )
};

export default ChalkDodgeAvailable;