import React from 'react';
import { LeblancActivityClick } from '../hooks/handleClick.js';

const LeblancContainer = ({item}) => {
    const { handleClick } = LeblancActivityClick(item.name, item.available, item.effects);

    return (
        <div className="jobs-container" onClick={handleClick}>
            <h1 className="jobs-name">{item.name}</h1>
        </div>
    );
}

export default LeblancContainer;