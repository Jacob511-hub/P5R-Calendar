import React from "react";

const StatsFilterItem = ({img, text}) => {
    return (
        <div className="stats-container">
            <img src={img} style={{
                width: '40%',
                height: 'auto'
            }}></img>
            <h1 className="stats-text">{text}</h1>
        </div>
    )
}

export default StatsFilterItem;