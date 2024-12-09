import React, { useState } from "react";

const ConfidantRank = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const image0 = "src/assets/star-blank.png";
    const image1 = "src/assets/star-filled.png";
  
    const handleClick = (index) => {
      setActiveIndex(index);
    };
  
    const rows = [
        Array.from({ length: 5 }, (_, i) => i),
        Array.from({ length: 5 }, (_, i) => i + 5)
      ];
    
      return (
        <div>
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} style={{ display: 'flex', gap: '5px', marginBottom: '10px' }}>
              {row.map((index) => (
                <img
                  key={index}
                  src={index <= activeIndex ? image1 : image0}
                  alt={`Image ${index + 1}`}
                  style={{ cursor: 'pointer', width: '30px', height: '30px' }}
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