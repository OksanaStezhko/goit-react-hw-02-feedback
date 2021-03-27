import React, { Component } from 'react';

class StatisticsItem extends Component {
  render() {
    const { itemName, itemValue } = this.props;
    return (
      <li>
        <span>{itemName}:</span>
        <span>{itemValue}</span>
      </li>
    );
  }
}

export default StatisticsItem;
