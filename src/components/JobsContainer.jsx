import React from 'react';
import { JobClick } from '../hooks/handleClick.js';

const JobsContainer = ({item}) => {
    const { handleClick } = JobClick(item.name, item.requirements, item.pay, item.stats, item.bonus, item.unlocks);

    return (
        <div className="jobs-container" onClick={handleClick}>
            <h1 className="jobs-name">{item.name}</h1>
        </div>
    );
}

export default JobsContainer;