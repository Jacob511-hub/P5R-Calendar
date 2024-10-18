import React, { useState } from 'react';
import { useEffect } from 'react';

const Info = ({ dateDisplay }) => {
    return (
        <div className="info-display">
            <h1 id="date-display">{dateDisplay}</h1>
        </div>
    )
}

export default Info;