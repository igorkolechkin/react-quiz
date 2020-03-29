import React, { Component } from 'react';
import axios from '@helpers/Axios';
import ActiveQuiz from '@components/Quiz/ActiveQuiz';
import FinishedQuiz from '@components/Quiz/FinishedQuiz';
import Loader from '@components/UI/Loader';

class Quiz extends Component {
  state = {
    loader: true,
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    noClickableAnswer: false,
    resultState: {
      total: 0,
      results: {}
    },
    quiz: []
  };

  onAnswerClickHandler = id => {
    if (this.state.noClickableAnswer) return;
    this.setState({ noClickableAnswer: true });

    const resultState = this.state.resultState;
    let activeQuestion = this.state.activeQuestion;
    let isFinished = this.state.isFinished;

    if (this.state.quiz[this.state.activeQuestion].rightAnswer === id) {
      activeQuestion++;

      if (!resultState.results[this.state.activeQuestion]) {
        resultState.results[this.state.activeQuestion] = 'success';
        resultState.total = resultState.total + 1
      }

      this.setState({
        answerState: {[id]: 'success'},
        resultState
      });

      if (activeQuestion >= this.state.quiz.length) isFinished = true;

    } else {
      resultState.results[this.state.activeQuestion] = 'error';
      this.setState({
        answerState: {[id]: 'error'},
        resultState
      });
    }

    const timeout = window.setTimeout(() => {
      this.setState({
        answerState: null,
        noClickableAnswer: false,
        activeQuestion,
        isFinished
      });

      window.clearTimeout(timeout);
    }, 2000);
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

  async componentDidMount() {
    try {
      const link = this.props.location.state;
      const response = await axios.get(`quizzes/${link}.json`);

      this.setState(state => ({
        quiz: response.data.quizzes,
        loader: false
      }));
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <React.Fragment>
        {
          this.state.loader
            ? <Loader />
            : this.state.isFinished
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
