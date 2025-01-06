import React from 'react';
import DividerCustom from './dividerCustom';

const InfoBox = ({
    headerText,
    activityData,
    dateAvailability
}) => {
    const checkDateAvailability = () => {
        if (headerText === "Day") {
            if (dateAvailability !== "skip" && dateAvailability !== "eveningOnly" && dateAvailability !== "storyAll") {
                return true;
            }
            else {
                return false;
            }
        } else if (headerText === "Night") {
            if (dateAvailability !== "skip" && dateAvailability !== "afterSchoolOnly" && dateAvailability !== "storyAll") {
                return true;
            }
            else {
                return false;
            }
        }
        else if (headerText === "Start" || headerText === "End" || headerText === "Auto" || headerText === "Dates" || headerText === "Start Date" || headerText === "End Date") {
            return true;
        }
        else {
            return false;
        }
    };

    if (activityData.length <= 0 || !checkDateAvailability()) {
        return null;
    }

    return (
        <>
            <>
                <h1 className='info-header'
                style={{
                    textAlign: 'left'
                }}>{headerText}</h1>
                <DividerCustom />
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                    {activityData.map((name, index) => (
                        <h2 className='info-header' key={index}>{name}</h2>
                    ))}
                </ul>
                <DividerCustom />
            </>
        </>
    );
};

export default InfoBox;