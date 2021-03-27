import React, { Component } from 'react';
import StatisticsItem from '../StatisticsItem';

class Statistics extends Component {
  render() {
    const { itemList } = this.props;
    return (
      <ul>
        {itemList.map(([key, value]) => (
          <StatisticsItem key={key} itemName={key} itemValue={value} />
        ))}
      </ul>
    );
  }
}

export default Statistics;
