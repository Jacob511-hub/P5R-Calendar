import React from "react";
import GridItem from "./gridItem";

const LegendItem = ({dateType, text}) => {
    return (
        <div className="legend-container">
            <GridItem
                key={dateType}
                dateNumber={""}
                dateType={dateType}
                tileSkewX={0}
                tileSkewY={0}
                shadowSkewX={8}
                shadowSkewY={8}
                weekday={""}
                clicked={""}
                handleClick={undefined}
            />
            <h1 className="legend-text">{text}</h1>
        </div>
    )
}

export default LegendItem;