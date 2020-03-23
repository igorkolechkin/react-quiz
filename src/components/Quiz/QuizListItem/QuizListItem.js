import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './QuizItem.module.scss';

const QuizListItem = props => (
  <li className={ styles.item }>
    <NavLink to={ `/quiz/${props.quiz}` } >Тест №{ props.quiz }</NavLink>
  </li>
);

export default QuizListItem;
