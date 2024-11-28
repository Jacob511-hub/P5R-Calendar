import React from 'react';

const ActivityContainerBasic = ({name, handleClick}) => {
    return (
        <div className="jobs-container" onClick={handleClick}>
            <h1 className="jobs-name">{name}</h1>
        </div>
    );
}

export default ActivityContainerBasic;