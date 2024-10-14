import React, { useState } from 'react';

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
    );
};

export default Months;