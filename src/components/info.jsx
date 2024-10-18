import React, { useState } from 'react';
import { useEffect } from 'react';

const Info = ({ dateDisplay }) => {
    return (
        <div className="info-display">
            <img
                className="dagger"
                src="src/assets/dagger.png">
            </img>
            <h1 id="date-display">{dateDisplay}</h1>
        </div>
    )
}

export default Info;