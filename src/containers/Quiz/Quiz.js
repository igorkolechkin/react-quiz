import React, { Component } from 'react';
import ActiveQuiz from '@components/ActiveQuiz';
import FinishedQuiz from '@components/FinishedQuiz';

class Quiz extends Component {
  state = {
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    resultState: {
      total: 0,
      results: {}
    },
    quiz: [
      {
        question: 'Какого цвета небо?',
        rightAnswerId: 1,
        id: 0,
        answers: [
          {text: 'Черный', id: 0},
          {text: 'Синий', id: 1},
          {text: 'Красный', id: 2},
          {text: 'Зеленый', id: 3}
        ]
      },
      {
        question: 'В каком году основали Санкт-Петербург?',
        rightAnswerId: 2,
        id: 1,
        answers: [
          {text: '1700', id: 0},
          {text: '1702', id: 1},
          {text: '1703', id: 2},
          {text: '1803', id: 3}
        ]
      }
    ]
  };

  onAnswerClickHandler = id => {
    const newActiveQuestion = this.state.activeQuestion + 1;
    const resultState = this.state.resultState;

    if (this.state.quiz[this.state.activeQuestion].rightAnswerId === id) {
      if (!resultState.results[this.state.activeQuestion]) {
        resultState.results[this.state.activeQuestion] = 'success';
        resultState.total = resultState.total + 1
      }

      this.setState({
        answerState: {[id]: 'success'},
        resultState
      });

      if (newActiveQuestion <= this.state.quiz.length - 1) {
        const timeout = window.setTimeout(() => {
          this.setState({
            activeQuestion: newActiveQuestion,
            answerState: null
          });

          window.clearTimeout(timeout);
        }, 0);
      } else {
        const timeout = window.setTimeout(() => {
          this.setState({ isFinished: true });

          window.clearTimeout(timeout);
        }, 0);
      }
    } else {
      resultState.results[this.state.activeQuestion] = 'error';

      this.setState({
        answerState: {[id]: 'error'},
        resultState
      });
    }
  };

  onRetryHandler = () => {
    this.setState({
      isFinished: false,
      activeQuestion: 0,
      answerState: null,
      resultState: {
        total: 0,
        results: {}
      },
    })
  };

  render() {
    return (
      <React.Fragment>
      {
        this.state.isFinished
          ? <FinishedQuiz
            resultState={ this.state.resultState }
            quiz={ this.state.quiz }
            onRetry={ this.onRetryHandler } />

          : <ActiveQuiz
            question={ this.state.quiz[this.state.activeQuestion].question }
            answers={ this.state.quiz[this.state.activeQuestion].answers }
            questionNumber={ this.state.activeQuestion + 1 }
            quizLength={ this.state.quiz.length }
            onAnswerClick={ this.onAnswerClickHandler }
            answerState={ this.state.answerState }/>
      }
      </React.Fragment>
    )
  }
}

export default Quiz;
