import React from 'react';
import s from './Section.module.css';

const Section = ({ title, children }) => (
  <section className={s.container}>
    <h2 className={s.container__title}>{title}</h2>
    {children}
  </section>
);

export default Section;
