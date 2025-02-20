import React from 'react';
import DividerCustom from './dividerCustom';
import { useInfo } from '../components/CalendarContext';

const SlackOffAvailable = () => {
    const {
        slackOffAvailable
    } = useInfo();

    return (
        <>
            {slackOffAvailable ? (
                <>
                    <h1 style={{fontSize: '2.2em'}}>Slack Off in Class!</h1>
                    <DividerCustom />
                </>
            ) : (
                <p style={{ margin: 0 }}></p>
            )}
        </>
    )
};

export default SlackOffAvailable;