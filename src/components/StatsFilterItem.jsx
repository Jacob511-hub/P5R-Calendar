import React from "react";
import { statSearch } from "../hooks/activitySearch";
import { useInfo } from '../components/CalendarContext';

const StatsFilterItem = ({img, stat, onClick}) => {
    const {
        updateFilter
    } = useInfo();

    return (
        <div
            className="stats-container"
            onClick={() => {
                updateFilter(statSearch(stat))
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