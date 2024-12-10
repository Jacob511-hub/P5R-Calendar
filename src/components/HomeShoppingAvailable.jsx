import React from 'react';
import DividerCustom from './dividerCustom';
import { useInfo } from '../components/CalendarContext';

const HomeShoppingAvailable = () => {
    const {
        homeShoppingAvailable
    } = useInfo();

    return (
        <>
            {homeShoppingAvailable ? (
                <>
                    <h1 style={{fontSize: '2.2em'}}>Home Shopping Available!</h1>
                    <DividerCustom />
                </>
            ) : (
                <p style={{ margin: 0 }}></p>
            )}
        </>
    )
};

export default HomeShoppingAvailable;