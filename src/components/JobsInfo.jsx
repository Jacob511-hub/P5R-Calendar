import React from 'react';
import DividerCustom from './dividerCustom';
import { useInfo } from '../components/CalendarContext';

const JobsInfo = () => {
    const {
        jobName,
        jobRequirements,
        jobPay,
        jobStats,
        jobBonus,
        jobUnlocks
    } = useInfo();

    if (jobName === "") {
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
                    <h1 className='info-header info-header-alt'>{jobName}</h1>
                </div>
                <DividerCustom />
                <h1 className='info-header'
                style={{
                    textAlign: 'left'
                }}>Requirements: </h1>
                <DividerCustom />
                <h1 className='info-header'>{jobRequirements}</h1>
                <DividerCustom />
                <h1 className='info-header'
                style={{
                    textAlign: 'left'
                }}>Payment: </h1>
                <DividerCustom />
                <h1 className='info-header'>{jobPay}</h1>
                <DividerCustom />
                <h1 className='info-header'
                style={{
                    textAlign: 'left'
                }}>Stats Earned: </h1>
                <DividerCustom />
                <h1 className='info-header'>{jobStats}</h1>
                <DividerCustom />
                <h1 className='info-header'
                style={{
                    textAlign: 'left'
                }}>Bonuses: </h1>
                <DividerCustom />
                <h1 className='info-header'>{jobBonus}</h1>
                <DividerCustom />
                <h1 className='info-header'
                style={{
                    textAlign: 'left'
                }}>Unlocks: </h1>
                <DividerCustom />
                <h1 className='info-header'>{jobUnlocks}</h1>
            </>
        </>
    )
};

export default JobsInfo;