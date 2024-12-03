import React, { useState } from "react";
import { useInfo } from '../components/CalendarContext';

const ResetButton = () => {
    const {
        updateFilter
    } = useInfo();

    return (
        <div className="reset-button"  onClick={() => updateFilter([])}>
            <h1 className="reset-text">Reset</h1>
        </div>
    )
};

export default ResetButton;