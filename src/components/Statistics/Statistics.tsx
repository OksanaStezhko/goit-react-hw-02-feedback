import React from 'react';
import StatisticsItem from '../StatisticsItem';
import { TStatisticsItem } from '../Interfaces/statisic.interface';

interface Props {
  itemList: TStatisticsItem[];
}
const Statistics = ({ itemList }: Props) => (
  <ul>
    {itemList.map(item => (
      <StatisticsItem key={item[0]} statisticsItem={item} />
    ))}
  </ul>
);

export default Statistics;
