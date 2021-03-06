import React from 'react';
import AnswerList from '@components/Quiz/AnswerList';

import styles from './ActiveQuiz.module.scss';

const ActiveQuiz = props => (
  <React.Fragment>
    <h2>Ответьте на все вопросы</h2>

    <div className={'card' }>
      <header className={ styles.header }>
        <span className={ styles.title }>
          { `${props.questionNumber}. ${props.question}` }
        </span>
        <span className={ styles.count }>
          { props.questionNumber } из { props.quizLength }
        </span>
      </header>

      <AnswerList answers={ props.answers }
                  onAnswerClick={ props.onAnswerClick }
                  answerState={ props.answerState }/>
    </div>
  </React.Fragment>
);

export default ActiveQuiz;
