import React, { useState } from 'react';
import * as activityDates from './activityDates';

export function searchByDate(date) {
    if (activityDates.FoolDates.includes(date)) {
        return "Fool";
    }
}