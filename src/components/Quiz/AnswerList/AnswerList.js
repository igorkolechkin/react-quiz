import React from 'react';
import AnswerItem from '@components/Quiz/AnswerItem';

const AnswerList = props => (
  <ul>
    { props.answers.map(answer => {
      return (
        <AnswerItem
          key={ answer.id }
          id={ answer.id }
          text={ answer.text }
          onAnswerClick={ props.onAnswerClick }
          answerState={ props.answerState ? props.answerState[answer.id] : null } />
        )
      })
    }
  </ul>
);

export default AnswerList;
