import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loader from '@components/UI/Loader';
import QuizListItem from '@components/Quiz/QuizListItem';
import axios from '@services/firebase';

class Quizzes extends Component {
  state = {
    quizzes: [],
    loader: true
  };

  async componentDidMount() {
    try {
      const response = await axios.get(`quizzes.json`);
      let quizzes = [];

      Object.keys(response.data).forEach((quizName, index) => {
        quizzes.push({
          id: index,
          name: quizName,
          title: response.data[quizName].quizzesTitle,
          description: response.data[quizName].quizzesDescription,
          icon: response.data[quizName].quizzesIcon
        });
      });

      this.setState(state => ({
        quizzes,
        loader: false
      }))
    } catch (error) {
      console.log(error)
    }
  }

  renderQuizzes() {
    return this.state.quizzes.map((quiz, index) => <QuizListItem key={ index } quiz={ quiz } /> );
  }

  render() {
    return (
      <React.Fragment>
        <h2>Список тестов</h2>

        {
          this.state.loader
            ? <Loader />
            : <ul className="list-style card">
                { this.renderQuizzes() }
              </ul>
        }
      </React.Fragment>
    )
  }
}

export default Quizzes;
