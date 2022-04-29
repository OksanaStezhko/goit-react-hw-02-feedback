import React from 'react';
import style from './Notification.module.css';

interface Props {
  message: string;
}

const Notification = ({ message }: Props) => (
  <div className={style.item}>{message}</div>
);

export default Notification;
