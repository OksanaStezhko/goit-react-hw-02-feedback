import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

StatisticsItem.propTypes = {
  itemName: PropTypes.string.isRequired,
  itemValue: PropTypes.number.isRequired,
};

export default StatisticsItem;
