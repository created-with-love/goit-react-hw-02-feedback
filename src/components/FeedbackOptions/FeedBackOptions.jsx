import React from 'react';
import s from './FeedbackOptions.module.css';

let buttonsId = 1;

const FeedBackOptions = ({ options, onLeaveFeedback }) => (
  <div className={s.feedback__controls}>
    {options.map((element, index) => (
      <button
        className={s.feedback__button}
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
