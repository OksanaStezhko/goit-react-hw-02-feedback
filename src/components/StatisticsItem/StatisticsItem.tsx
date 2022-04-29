import React from 'react';
import style from './StatisticsItem.module.css';
import { TStatisticsItem } from '../Interfaces/statisic.interface';

interface Props {
  statisticsItem: TStatisticsItem;
}

const StatisticsItem = ({ statisticsItem: [itemName, itemValue] }: Props) => (
  <li className={style.item}>
    <span>{itemName}:</span>
    <span>
      {itemValue}
      {itemName === 'positive feedback' ? '%' : ''}
    </span>
  </li>
);

export default StatisticsItem;
