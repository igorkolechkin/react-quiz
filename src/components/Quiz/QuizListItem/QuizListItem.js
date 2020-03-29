import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './QuizItem.module.scss';

const QuizListItem = props => (
  <li className={ styles.item }>
    <NavLink
      to={{
        pathname: `/quiz/${props.quiz.id + 1}`,
        search: `?link=${props.quiz.name}`,
        //`/quiz/${props.quiz.name}`
      }}
    >
      <h3>{ props.quiz.title }</h3>
      <div>{ props.quiz.description }</div>
    </NavLink>
  </li>
);

export default QuizListItem;
