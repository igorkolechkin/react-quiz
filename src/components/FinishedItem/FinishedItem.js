import React from 'react';
import styles from './FinishedItem.module.scss';

const FinishedItem = props => {
  const itemClasses = [
    styles.item,
    styles[props.result]
  ];

  const iconClasses = [
    'fa',
    props.result === 'success' ? 'fa-check' : 'fa-times',
  ];

  return (
    <li className={ itemClasses.join(' ') }>
      <span>{ `${props.index}. ${props.question}` }</span>
      <i className={ iconClasses.join(' ') }></i>
    </li>
  )
};

export default FinishedItem;
