import React from 'react';
import AnswerList from '@components/AnswerList';

import styles from './ActiveQuiz.module.scss';

const ActiveQuiz = props => (
  <React.Fragment>
    <h2>Ответьте на все вопросы</h2>

    <div className={ styles.quiz + ' card' }>
      <header>
        <span className={ styles.quiz__title }>
          { `${props.questionNumber}. ${props.question}` }
        </span>
        <span>{ props.questionNumber } из { props.quizLength }</span>
      </header>

      <AnswerList answers={ props.answers }
                  onAnswerClick={ props.onAnswerClick }
                  answerState={ props.answerState }/>
    </div>
  </React.Fragment>
);

export default ActiveQuiz;
