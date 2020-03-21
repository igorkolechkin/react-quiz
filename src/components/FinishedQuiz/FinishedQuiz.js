import React from 'react';
import FinishedList from '@components/FinishedList';
import styles from './FinishedQuiz.module.scss';

const FinishedQuiz = props => (
  <React.Fragment>
    <h2>Итоги ответов</h2>

    <div className="card">
      <FinishedList
        quiz={ props.quiz }
        results={ props.resultState.results } />

      <p>Правильно { props.resultState.total } из { props.quiz.length }</p>

      <button className={ styles.btn }
              onClick={ props.onRetry } >Повторить</button>
    </div>
  </React.Fragment>
);

export default FinishedQuiz;
