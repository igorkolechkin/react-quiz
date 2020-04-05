import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loader from '@components/UI/Loader';
import QuizListItem from '@components/Quiz/QuizListItem';
import { fetchQuizzes } from '@store/actions/quiz';

class Quizzes extends Component {
  componentDidMount() {
    this.props.fetchQuizzes();
  }

  renderQuizzes() {
    return this.props.quizzes.map((quiz, index) => <QuizListItem key={ index } quiz={ quiz } /> );
  }

  render() {
    return (
      <React.Fragment>
        <h2>Список тестов</h2>

        {
          this.props.loader
            ? <Loader />
            : !this.props.error
              ? <ul className="list-style card">
                  { this.renderQuizzes() }
                </ul>
              : <p>Что-то пошло не так...</p>
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    quizzes: state.quiz.quizzes,
    loader: state.quiz.loader,
    error: state.quiz.error
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchQuizzes
}, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(Quizzes);
