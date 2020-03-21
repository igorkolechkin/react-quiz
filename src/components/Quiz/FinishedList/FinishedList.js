import React from 'react';
import FinishedItem from '@components/Quiz/FinishedItem';

const FinishedList = props => (
  <ul>
    { props.quiz.map((item, index) => {
      return (
        <FinishedItem
          key={ index }
          index={ index + 1 }
          question={ item.question }
          result={ props.results[index] } />
        )
      }
    )}
  </ul>
);

export default FinishedList;
