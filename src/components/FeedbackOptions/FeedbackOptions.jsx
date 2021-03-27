import React, { Component } from 'react';
import FeedbackOptionsItem from '../FeedbackOptionsItem';

class FeedbackOptions extends Component {
  render() {
    const { options } = this.props;
    return (
      <ul>
        {options.map(option => (
          <FeedbackOptionsItem key={option} item={option} />
        ))}
      </ul>
    );
  }
}
export default FeedbackOptions;
