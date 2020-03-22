import React, { Component } from 'react';
import QuizList from '@components/Quiz/QuizList';

class Quizzes extends Component {
  quizList = [1,2,3,4];

  render() {
    return (
      <React.Fragment>
        <h2>Список тестов</h2>

        <QuizList quizList={ this.quizList } />
      </React.Fragment>
    )
  }
}

export default Quizzes;
