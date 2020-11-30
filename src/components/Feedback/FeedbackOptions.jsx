import React from 'react';
let buttonsId = 1;

const FeedBackOptions = ({ options, onLeaveFeedback }) => (
  <div className="feedback__controls">
    {options.map((element, index) => (
      <button
        key={buttonsId + index}
        type="button"
        onClick={() => onLeaveFeedback(element)}
      >
        {element.slice(0, 1).toUpperCase() + element.slice(1)}
      </button>
    ))}
  </div>
);

export default FeedBackOptions;
