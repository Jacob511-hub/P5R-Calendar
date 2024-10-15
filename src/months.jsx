import React, { useState } from 'react';
import Dates from './dates.jsx';

const Months = () => {
    const images = [
        "src/assets/April.png",
        "src/assets/May.png",
        "src/assets/June.png",
        "src/assets/July.png",
        "src/assets/August.png",
        "src/assets/September.png",
        "src/assets/October.png",
        "src/assets/November.png",
        "src/assets/December.png",
        "src/assets/January.png",
        "src/assets/February.png",
        "src/assets/March.png",
    ];

    const dateKeys = [
        [ //April
            ["none", "none", "none", "none", "none", "skip", "skip"],
            ["skip", "skip", "skip", "skip", "skip", "skip", "storyAll"],
            ["storyAll", "storyAll", "storyAll", "storyAll", "storyAll", "storyAll", "storyAll"],
            ["storyAll", "free", "free", "free", "free", "free", "free"],
            ["free", "free", "free", "free", "free", "deadline", "deadline"],
            ["none", "none", "none", "none", "none", "none", "none"],
        ],
        [ //May
            ["deadline", "eveningOnly", "eveningOnly", "eveningOnly", "eveningOnly", "free", "eveningOnly"],
            ["eveningOnly", "free", "free", "storyAll", "storyAll", "storyAll", "storyAll"],
            ["eveningOnly", "storyAll", "eveningOnly", "free", "free", "free", "free"],
            ["free", "free", "free", "free", "free", "free", "free"],
            ["free", "eveningOnly", "free", "none", "none", "none", "none"],
            ["none", "none", "none", "none", "none", "none", "none"],
        ],
        [ //June
            ["none", "none", "none", "free", "deadline", "deadline", "deadline"],
            ["eveningOnly", "free", "free", "free", "eveningOnly", "eveningOnly", "storyAll"],
            ["free", "eveningOnly", "eveningOnly", "eveningOnly", "eveningOnly", "eveningOnly", "free"],
            ["free", "free", "free", "free", "free", "free", "free"],
            ["free", "free", "free", "free", "free", "none", "none"],
            ["none", "none", "none", "none", "none", "none", "none"],
        ],
        [ //July
            ["none", "none", "none", "none", "none", "free", "free"],
            ["free", "free", "free", "deadline", "deadline", "deadline", "eveningOnly"],
            ["eveningOnly", "eveningOnly", "free", "storyAll", "storyAll", "storyAll", "storyAll"],
            ["eveningOnly", "eveningOnly", "free", "eveningOnly", "eveningOnly", "eveningOnly", "eveningOnly"],
            ["storyAll", "eveningOnly", "free", "free", "free", "free", "free"],
            ["free", "free", "none", "none", "none", "none", "none"],
        ],
        [ //August
            ["none", "free", "free", "free", "free", "free", "free"],
            ["free", "free", "free", "free", "free", "free", "free"],
            ["free", "free", "free", "free", "deadline", "deadline", "deadline"],
            ["eveningOnly", "eveningOnly", "eveningOnly", "eveningOnly", "eveningOnly", "eveningOnly", "eveningOnly"],
            ["eveningOnly", "eveningOnly", "eveningOnly", "eveningOnly", "none", "none", "none"],
            ["none", "none", "none", "none", "none", "none", "none"],
        ],
        [ //September
            ["none", "none", "none", "none", "eveningOnly", "free", "eveningOnly"],
            ["free", "free", "afterSchoolOnly", "storyAll", "storyAll", "storyAll", "storyAll"],
            ["storyAll", "storyAll", "storyAll", "storyAll", "storyAll", "storyAll", "storyAll"],
            ["eveningOnly", "free", "free", "free", "free", "free", "free"],
            ["free", "free", "free", "free", "free", "free", "none"],
            ["none", "none", "none", "none", "none", "none", "none"],
        ],
        [ //October
            ["none", "none", "none", "none", "none", "none", "free"],
            ["free", "afterSchoolOnly", "free", "free", "free", "free", "deadline"],
            ["deadline", "deadline", "storyAll", "eveningOnly", "eveningOnly", "free", "free"],
            ["free", "storyAll", "storyAll", "storyAll", "storyAll", "eveningOnly", "eveningOnly"],
            ["eveningOnly", "eveningOnly", "eveningOnly", "storyAll", "eveningOnly", "storyAll", "eveningOnly"],
            ["free", "free", "none", "none", "none", "none", "none"],
        ],
        [ //November
            ["none", "none", "free", "free", "free", "free", "free"],
            ["free", "free", "free", "free", "free", "free", "free"],
            ["free", "free", "free", "free", "deadline", "deadline", "storyAll"],
            ["storyAll", "storyAll", "eveningOnly", "eveningOnly", "eveningOnly", "free", "free"],
            ["free", "free", "free", "free", "none", "none", "none"],
            ["none", "none", "none", "none", "none", "none", "none"],
        ],
        [ //December
            ["none", "none", "none", "none", "free", "free", "free"],
            ["free", "free", "free", "free", "free", "free", "free"],
            ["free", "free", "free", "free", "free", "deadline", "deadline"],
            ["eveningOnly", "eveningOnly", "storyAll", "storyAll", "storyAll", "eveningOnly", "storyAll"],
            ["storyAll", "storyAll", "storyAll", "storyAll", "storyAll", "storyAll", "storyAll"],
            ["none", "none", "none", "none", "none", "none", "none"],
        ],
        [ //January
            ["storyAll", "storyAll", "storyAll", "storyAll", "storyAll", "storyAll", "storyAll"],
            ["storyAll", "storyAll", "storyAll", "storyAll", "storyAll", "free", "free"],
            ["free", "free", "free", "free", "free", "free", "free"],
            ["free", "free", "free", "free", "free", "free", "free"],
            ["free", "free", "free", "none", "none", "none", "none"],
            ["none", "none", "none", "none", "none", "none", "none"],
        ],
        [ //February
            ["none", "none", "none", "free", "deadline", "finale", "skip"],
            ["skip", "skip", "skip", "skip", "skip", "skip", "skip"],
            ["skip", "skip", "skip", "skip", "skip", "skip", "skip"],
            ["skip", "skip", "skip", "skip", "skip", "skip", "skip"],
            ["skip", "skip", "none", "none", "none", "none", "none"],
            ["none", "none", "none", "none", "none", "none", "none"],
        ],
        [ //March
            ["none", "none", "skip", "skip", "skip", "skip", "skip"],
            ["skip", "skip", "skip", "skip", "skip", "skip", "skip"],
            ["skip", "skip", "skip", "skip", "skip", "skip", "skip"],
            ["skip", "skip", "skip", "skip", "skip", "skip", "skip"],
            ["skip", "skip", "skip", "skip", "skip", "none", "none"],
            ["none", "none", "none", "none", "none", "none", "none"],
        ],
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextImage = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const goToPreviousImage = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="calendar">
            <div id="calendar-header">
                <span
                    className="icon-prev"
                    onClick={goToPreviousImage}
                    disabled={currentIndex === 0}
                    >&#x276E;
                </span>
                <img
                    className="month-name"
                    src={images[currentIndex]}
                    alt={`${currentIndex + 1}`} >
                </img>
                <span
                    className="icon-next"
                    onClick={goToNextImage}
                    disabled={currentIndex === images.length - 1}
                    >&#x276F;
                </span>
            </div>
            <div className="grid-container">
                <Dates dateKeys={dateKeys[currentIndex]} />
            </div>
        </div>
    );
};

export default Months;