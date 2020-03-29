import React, { Component } from 'react';
import QuizListItem from '@components/Quiz/QuizListItem';
import axios from 'axios';

class Quizzes extends Component {
  state = {
    quizzes: []
  };

  async componentDidMount() {
    try {
      const response = await axios.get(`https://quiz-508af.firebaseio.com/quizzes.json`);
      //let quizzes = [];

      Object.keys(response.data).forEach((quiz, index) => {
        console.log(quiz)
      })
    } catch (error) {

    }
  }

  renderQuizzes() {
    return this.state.quizzes.map((quiz, index) => <QuizListItem key={ index } quiz={ quiz } /> );
  }

  render() {
    return (
      <React.Fragment>
        <h2>Список тестов</h2>

        <ul className="list-style card">
          { this.renderQuizzes() }
        </ul>
      </React.Fragment>
    )
  }
}

export default Quizzes;
