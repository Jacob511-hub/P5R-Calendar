import React from 'react';
import DividerCustom from './dividerCustom';
import { useInfo } from '../components/CalendarContext';

const FacilitiesInfo = () => {
    const {
        facilityName,
        facilityAvailable,
        facilityEffect,
    } = useInfo();

    if (facilityName === "") {
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
                    <h1 className='info-header'
                    style={{
                        fontSize: '2.5em'
                    }}>{facilityName}</h1>
                </div>
                <DividerCustom />
                <h1 className='info-header'
                style={{
                    textAlign: 'left'
                }}>Availability: </h1>
                <DividerCustom />
                <h1 className='info-header'>{facilityAvailable}</h1>
                <DividerCustom />
                <h1 className='info-header'
                style={{
                    textAlign: 'left'
                }}>Effect: </h1>
                <DividerCustom />
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                    {facilityEffect.map((name, index) => (
                        <h2 key={index}>{name}</h2>
                    ))}
                </ul>
                <DividerCustom />
            </>
        </>
    )
};

export default FacilitiesInfo;