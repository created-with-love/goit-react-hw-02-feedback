import React from 'react';
import s from './Statistic.module.css';

const Statistic = ({ good, neutral, bad, total, percent }) => (
  <ul className={s.statisic__list}>
    <li>Good: {good}</li>
    <li>Neutral: {neutral}</li>
    <li>Bad: {bad}</li>
    <li>Total: {total}</li>
    <li>Positive feedback: {percent}%</li>
  </ul>
);

export default Statistic;
