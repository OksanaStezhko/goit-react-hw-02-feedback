import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeedbackOptionsItem extends Component {
  render() {
    const { buttonName, onClickButton } = this.props;

    return (
      <li>
        <button type="button" onClick={onClickButton}>
          {buttonName}
        </button>
      </li>
    );
  }
}

FeedbackOptionsItem.propTypes = {
  buttonName: PropTypes.string.isRequired,
  onClickButton: PropTypes.func.isRequired,
};

export default FeedbackOptionsItem;
