import React, { Component } from 'react';
import ActiveQuiz from '@components/Quiz/ActiveQuiz';
import FinishedQuiz from '@components/Quiz/FinishedQuiz';

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
        question: 'Какой тег существует?',
        rightAnswerId: 1,
        id: 0,
        answers: [
          {text: '<color>', id: 0},
          {text: '<code>', id: 1},
          {text: '<pr>', id: 2},
          {text: '<quote>', id: 3}
        ]
      },
      {
        question: 'Как правильно задать ссылку на адрес электронной почты?',
        rightAnswerId: 2,
        id: 1,
        answers: [
          {text: '<a href="mail:myrusakov@gmail.com">Написать</a>', id: 0},
          {text: '<a href="myrusakov@gmail.com">Написать</a>', id: 1},
          {text: '<a href="mailto:myrusakov@gmail.com">Написать</a>', id: 2},
          {text: '<a href="email:myrusakov@gmail.com">Написать</a>', id: 3}
        ]
      },
      {
        question: 'Какой из тегов создает нумерованный список?',
        rightAnswerId: 0,
        id: 2,
        answers: [
          {text: '<ol>', id: 0},
          {text: '<ul>', id: 1},
          {text: '<tr>', id: 2},
          {text: '<list>', id: 3}
        ]
      },
      {
        question: 'На сайте внутри папки pages находится файл page.html. А внутри папки images находится файл foto.jpg. Причём папки images и pages лежат в корне сайта. Как правильно написать путь к foto.jpg из файла page.html?',
        rightAnswerId: 0,
        id: 3,
        answers: [
          {text: '../images/foto.jpg', id: 0},
          {text: 'images/foto.jpg', id: 1},
          {text: 'pages/images/foto.jpg', id: 2},
          {text: '../images/pages/foto.jpg', id: 3}
        ]
      },
      {
        question: 'Какая ошибка в следующем коде: <a href="page.html"><b><i>Страница 1</i></a>?',
        rightAnswerId: 1,
        id: 4,
        answers: [
          {text: 'Не указан обязательный атрибут title у тега <a>', id: 0},
          {text: 'Не закрыт тег <b>', id: 1},
          {text: 'Внутри тега <a> не может быть тег <b> и/или тег <i>', id: 2},
          {text: 'Не указан обязательный атрибут alt у тега <a>', id: 3}
        ]
      },
      {
        question: 'Как написать химическую формулу тетрасульфида димышьяка (As2S4)?',
        rightAnswerId: 0,
        id: 5,
        answers: [
          {text: 'As<sub>2</sub>S<sub>4</sub>', id: 0},
          {text: 'As<pow>2</pow>S<pow>4</pow>', id: 1},
          {text: 'As<sup>2S<sup>4', id: 2},
          {text: 'As<sup>2</sup>S<sup>4</sup>', id: 3}
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

      const timeout = window.setTimeout(() => {
        if (newActiveQuestion <= this.state.quiz.length - 1) {
          this.setState({
            activeQuestion: newActiveQuestion,
            answerState: null
          });
        } else {
          this.setState({ isFinished: true });
        }

        window.clearTimeout(timeout);
      }, 2000);
    } else {
      resultState.results[this.state.activeQuestion] = 'error';
      this.setState({
        answerState: {[id]: 'error'},
        resultState
      });

      const timeout = window.setTimeout(() => {
        this.setState({ answerState: null });

        window.clearTimeout(timeout);
      }, 2000);
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
