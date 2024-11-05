import React from 'react';
import Divider from '@mui/material/Divider';

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

    return (
        <>
            {activityData.length > 0 && checkDateAvailability() ? (
                <>
                    <h1 className='info-header'>{headerText}</h1>
                    <Divider variant="middle" 
                        style={{
                            borderColor: 'white',
                        }}
                    />
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                        {activityData.map((name, index) => (
                            <h2 key={index}>{name}</h2>
                        ))}
                    </ul>
                    <Divider variant="middle" 
                        style={{
                            borderColor: 'white',
                        }}
                    />
                </>
            ) : (
                <p style={{ margin: 0 }}></p>
            )}
        </>
    );
};

export default InfoBox;