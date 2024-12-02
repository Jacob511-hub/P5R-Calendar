import React from "react";
import { statSearch } from "../hooks/activitySearch";

const StatsFilterItem = ({img, stat}) => {
    return (
        <div className="stats-container" onClick={() => statSearch(stat)}>
            <img src={img} style={{
                width: '40%',
                height: 'auto'
            }}></img>
            <h1 className="stats-text">{stat}</h1>
        </div>
    )
}

export default StatsFilterItem;