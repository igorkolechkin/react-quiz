import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import ActiveQuiz from '@components/Quiz/ActiveQuiz';
import FinishedQuiz from '@components/Quiz/FinishedQuiz';
import Loader from '@components/UI/Loader';
import { fetchQuiz, quizAnswerEnter, quizAnswerReset } from '@store/actions/quiz';

class Quiz extends Component {
  componentDidMount() {
    this.props.fetchQuiz(this.props.location.state);
  }

  componentWillUnmount() {
    this.props.quizAnswerReset();
  }

  highlightItem(elem) {

  }

  onAnswerClickHandler = (e) => {
    console.log(e)
    //this.props.quizAnswerEnter(e)
  }

  render() {
    return (
      <React.Fragment>
        {
          this.props.loader || this.props.quiz.length === 0
            ? <Loader />
            : this.props.isFinished
              ? <FinishedQuiz
                resultState={ this.props.resultState }
                quiz={ this.props.quiz }
                onRetry={ this.props.quizAnswerReset } />
              : <ActiveQuiz
                question={ this.props.quiz[this.props.activeQuestion].question }
                answers={ this.props.quiz[this.props.activeQuestion].answers }
                questionNumber={ this.props.activeQuestion + 1 }
                quizLength={ this.props.quiz.length }
                onAnswerClick={ this.props.quizAnswerEnter }
                answerState={ this.props.answerState }/>
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    loader: state.quiz.loader,
    isFinished: state.quiz.isFinished,
    activeQuestion: state.quiz.activeQuestion,
    answerState: state.quiz.answerState,
    noClickableAnswer: state.quiz.noClickableAnswer,
    resultState: state.quiz.resultState,
    quiz: state.quiz.quiz
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchQuiz, quizAnswerEnter, quizAnswerReset
}, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(Quiz);
