import React from 'react';

const Controls = ({ onHandleGoodBtn, onHandleNeutralBtn, onHandleBadBtn }) => (
  <div className="feedback__controls">
    <button type="button" onClick={onHandleGoodBtn}>
      Good
    </button>
    <button type="button" onClick={onHandleNeutralBtn}>
      Neutral
    </button>
    <button type="button" onClick={onHandleBadBtn}>
      Bad
    </button>
  </div>
);

export default Controls;
