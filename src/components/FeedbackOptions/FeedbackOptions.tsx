import React from 'react';
import FeedbackOptionsItem from '../FeedbackOptionsItem';

interface Props {
  options: string[];
  onClickButton: (option: string) => void;
}

const FeedbackOptions = ({ options, onClickButton }: Props) => (
  <ul>
    {options.map(option => (
      <FeedbackOptionsItem
        key={option}
        buttonName={option}
        onClickButton={() => {
          onClickButton(option);
        }}
      />
    ))}
  </ul>
);

export default FeedbackOptions;
