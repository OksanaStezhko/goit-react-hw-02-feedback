import React from 'react';
import style from './Sections.module.css';

interface Props {
  title: string;
  children: JSX.Element;
}
const Sections = ({ title, children }: Props) => (
  <section className={style.section}>
    <h2>{title}</h2>
    {children}
  </section>
);

export default Sections;
