import React from 'react';
import { Link } from 'react-router-dom';
import FinishedList from '@components/Quiz/FinishedList';
import Button from '@components/UI/Button';

const FinishedQuiz = props => (
  <React.Fragment>
    <h2>Итоги ответов</h2>

    <div className="card">
      <FinishedList
        quiz={ props.quiz }
        results={ props.resultState.results } />

      <p>Правильно { props.resultState.total } из { props.quiz.length }</p>

      <div className="buttons-wrapper">
        <Button onClick={ props.onRetry }>Повторить</Button>
        <Link to="/">
          <Button>Перейти в список тестов</Button>
        </Link>
      </div>
    </div>
  </React.Fragment>
);

export default FinishedQuiz;
