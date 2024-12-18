import React, { useState } from 'react';

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
        src="src\assets\checkbox.png"
        style={{ display: 'block', width: '100%' }}
      />
      {checked && (
        <img
          src="src\assets\checkmark.png"
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
