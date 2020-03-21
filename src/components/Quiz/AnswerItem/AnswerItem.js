import React from 'react';
import styles from './AnswerItem.module.scss';

const AnswerItem = props => {
  let classes = [styles.answerItem];
  if (props.answerState) classes.push(styles[props.answerState]);

  return (
    <li className={ classes.join(' ') }
        onClick={ () => props.onAnswerClick(props.id) }>{ props.text }</li>
  );
};

export default AnswerItem;
