import React from 'react';
import ActivityContainerBasic from './ActivityContainerBasic';
import { useBookDVDGameClick, useJobClick, useLeblancActivityClick, useFacilityClick } from '../hooks/handleClick.js';
import StatPoint from './StatPoint.jsx';

const FilteredList = ({filter}) => {
    const BookDVDGameClick = useBookDVDGameClick();
    const jobClick = useJobClick();
    const leblancActivityClick = useLeblancActivityClick();
    const facilityClick = useFacilityClick();

    const handleBookDVDGameClick = (bookdvdgame) => {
        BookDVDGameClick(bookdvdgame.name, bookdvdgame.chapters, bookdvdgame.effect, bookdvdgame.description, bookdvdgame.price, bookdvdgame.location, bookdvdgame.available);
    };

    const handleJobClick = (job) => {
        jobClick(job.name, job.requirements, job.pay, job.stats, job.bonus, job.unlocks);
    };

    const handleLeblancActivityClick = (item) => {
        leblancActivityClick(item.name, item.available, item.effects);
    };

    const handleFacilityClick = (item) => {
        facilityClick(item.name, item.availability, item.effects);
    };

    const determineClickHandler = (item) => {
        if (item.chapters) {
            return () => handleBookDVDGameClick(item);
        }
        else if (item.requirements) {
            return () => handleJobClick(item);
        }
        else if (item.available) {
            return () => handleLeblancActivityClick(item);
        }
        else if (item.availability) {
            return () => handleFacilityClick(item);
        }
        else {
            return null;
        }
    };

    return (
        <div>
            <StatPoint />
            {filter.map((item) => (
                <ActivityContainerBasic
                    key={item.name}
                    name={item.name}
                    handleClick={determineClickHandler(item)}
                />
            ))}
        </div>
    )
}

export default FilteredList;