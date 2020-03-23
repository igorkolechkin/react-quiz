import React from 'react';
import QuizListItem from '@components/Quiz/QuizListItem';

const QuizList = props => (
  <ul className="list-style">
    {
      props.quizList.map((quiz, index) => {
        return (
          <QuizListItem key={ index } quiz={ quiz } />
        )
      })
    }
  </ul>
);

export default QuizList;
