import React from 'react';
import style from './FeedbackOptionsItem.module.css';

interface Props {
  buttonName: string;
  onClickButton: () => void;
}
const FeedbackOptionsItem = ({ buttonName, onClickButton }: Props) => (
  <li className={style.item}>
    <button type="button" className={style.button} onClick={onClickButton}>
      {buttonName}
    </button>
  </li>
);

export default FeedbackOptionsItem;
