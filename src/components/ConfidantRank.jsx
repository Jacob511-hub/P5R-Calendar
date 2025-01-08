import React, { useState } from "react";
import starBlankImage from '../assets/star-blank.png';
import starFilledImage from '../assets/star-filled.png';

const ConfidantRank = ({ name, rank, toggleRank }) => {
    const [activeIndex, setActiveIndex] = useState(rank - 1);
  
    const image0 = starBlankImage;
    const image1 = starFilledImage;
  
    const handleClick = (index) => {
      setActiveIndex(index);
      toggleRank(name, index);
    };
  
    const rows = [
        Array.from({ length: 5 }, (_, i) => i),
        Array.from({ length: 5 }, (_, i) => i + 5)
    ];

    return (
    <div>
        {rows.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex', justifyContent: 'center', gap: '5px', marginBottom: '10px' }}>
            {row.map((index) => (
            <img
                key={index}
                src={index <= activeIndex ? image1 : image0}
                className="rank-star"
                onClick={(e) => {
                e.stopPropagation();
                handleClick(index);
                }}
            />
            ))}
        </div>
        ))}
    </div>
    );
};
    
  
export default ConfidantRank;