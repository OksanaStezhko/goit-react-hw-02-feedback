import React, { Component } from 'react';

class FeedbackOptionsItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <li>
        <button type="button">{item}</button>
      </li>
    );
  }
}

export default FeedbackOptionsItem;
