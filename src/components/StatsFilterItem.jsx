import React from "react";
import { statSearch } from "../hooks/activitySearch";
import { useInfo } from '../components/CalendarContext';
import { leblancActivities } from '../hooks/leblanc';
import { jobs } from '../hooks/jobs';

const StatsFilterItem = ({img, stat, onClick}) => {
    const {
        updateFilter,
        books,
        dvds,
        games,
    } = useInfo();

    return (
        <div
            className="stats-container"
            onClick={() => {
                updateFilter(statSearch(stat, books, dvds, games, leblancActivities, jobs))
                if (onClick) onClick();
            }}
        >
            <img src={img} style={{
                width: '40%',
                height: 'auto'
            }}></img>
            <h1 className="stats-text">{stat}</h1>
        </div>
    )
}

export default StatsFilterItem;