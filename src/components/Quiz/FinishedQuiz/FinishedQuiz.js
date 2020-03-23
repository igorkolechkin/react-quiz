import React from 'react';
import { NavLink } from 'react-router-dom';
import FinishedList from '@components/Quiz/FinishedList';
import Button from '@components/UI/Button';
import styles from './FinishedQuiz.module.scss';

const FinishedQuiz = props => (
  <React.Fragment>
    <h2>Итоги ответов</h2>

    <div className="card">
      <FinishedList
        quiz={ props.quiz }
        results={ props.resultState.results } />

      <p>Правильно { props.resultState.total } из { props.quiz.length }</p>

      <div className={ styles.buttons }>
        <Button onClick={ props.onRetry }>Повторить</Button>
        <NavLink to="/">
          <Button>Перейти в список тестов</Button>
        </NavLink>
      </div>
    </div>
  </React.Fragment>
);

export default FinishedQuiz;
