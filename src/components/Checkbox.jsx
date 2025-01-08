import React from 'react';
import checkboxImage from '../assets/checkbox.png'
import checkmarkImage from '../assets/checkmark.png'

const Checkbox = ({ checked, toggleChecked }) => {
  return (
    <div
      className="checkbox-container"
      onClick={(e) => {
        e.stopPropagation();
        toggleChecked();
      }}
    >
      <img
        src={checkboxImage}
        style={{ display: 'block', width: '100%' }}
      />
      {checked && (
        <img
          src={checkmarkImage}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      )}
    </div>
  );
};

export default Checkbox;
