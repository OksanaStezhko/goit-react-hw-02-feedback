import React from 'react';
import style from './Sections.module.css';

const Sections = ({ title, children }) => (
  <section className={style.section}>
    <h2>{title}</h2>
    {children}
  </section>
);

export default Sections;
