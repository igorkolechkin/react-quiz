import React, {Component} from 'react';
import axios from '@services/firebase';
import QuizHeaderForm from '@components/Forms/QuizHeaderForm';
import QuizMainForm from '@components/Forms/QuizMainForm';
import { changeInput } from '@services/validation';

class QuizCreator extends Component {
  state = {
    headerControls: false,
    mainFormValid: false,
    headerFormValid: false,
    rightAnswer: 'answer1',
    quizzes: [],
    formControls: this.createFormControls(),
    headerFormControls: this.createHeaderFormControls()
  };

  submitHandler(e) {
    e.preventDefault();
  }

  createFormControls() {
    return {
      question: {
        value: '',
        type: 'text',
        label: 'Вопрос',
        id: 'question',
        errorMessage: 'Введите вопрос',
        valid: false,
        touched: false,
        validation: {
          required: true
        }
      },
      answer1: {
        value: '',
        type: 'text',
        label: 'Ответ №1',
        id: 'answer1',
        errorMessage: 'Введите ответ №1',
        valid: false,
        touched: false,
        validation: {
          required: true
        }
      },
      answer2: {
        value: '',
        type: 'text',
        label: 'Ответ №2',
        id: 'answer2',
        errorMessage: 'Введите ответ №2',
        valid: false,
        touched: false,
        validation: {
          required: true
        }
      },
      answer3: {
        value: '',
        type: 'text',
        label: 'Ответ №3',
        id: 'answer3',
        errorMessage: 'Введите ответ №3',
        valid: false,
        touched: false,
        validation: {
          required: true
        }
      },
      answer4: {
        value: '',
        type: 'text',
        label: 'Ответ №4',
        id: 'answer4',
        errorMessage: 'Введите ответ №4',
        valid: false,
        touched: false,
        validation: {
          required: true
        }
      },
    }
  }

  createHeaderFormControls() {
    return {
      quizzesTitle: {
        value: '',
        type: 'text',
        label: 'Заголовок теста',
        id: 'quizzesTitle',
        errorMessage: 'Введите заголовок теста',
        valid: false,
        touched: false,
        validation: {
          required: true
        }
      },
      quizzesDescription: {
        value: '',
        type: 'text',
        label: 'Описание теста',
        id: 'quizzesDescription',
        errorMessage: 'Введите описание теста',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 20
        }
      },
      quizzesIcon: {
        value: '',
        type: 'text',
        label: 'Иконка теста',
        id: 'quizzesIcon',
        errorMessage: 'Вставьте иконку теста',
        valid: false,
        touched: false,
        validation: {
          required: true
        }
      },
    }
  }

  onMainInputChangeHandler = (value, controlName) => {
    let controls = {...this.state.formControls};
    const {formControls, formValid: mainFormValid} = changeInput(controls, controlName, value);

    this.setState({ formControls, mainFormValid })
  };

  onHeaderInputChangeHandler = (value, controlName) => {
    let controls = {...this.state.headerFormControls};
    const {formControls: headerFormControls, formValid: headerFormValid} = changeInput(controls, controlName, value);

    this.setState({ headerFormControls, headerFormValid })
  };

  showMainFormHandler = () => this.setState({ headerControls: true });

  onSelectChangeHandler = value => this.setState({ rightAnswer: value });

  addQuestionsHandler = () => {
    let quizzes = [...this.state.quizzes];
    const {question, answer1, answer2, answer3, answer4} = this.state.formControls;

    const questionItem = {
      id: quizzes.length,
      question: question.value,
      rightAnswer: this.state.rightAnswer,
      answers: [
        {text: answer1.value, id: answer1.id},
        {text: answer2.value, id: answer2.id},
        {text: answer3.value, id: answer3.id},
        {text: answer4.value, id: answer4.id},
      ]
    };

    quizzes.push(questionItem);

    this.setState({
      formValid: false,
      rightAnswer: 'answer1',
      quizzes,
      formControls: this.createFormControls()
    });
  };

  createQuizHandler = async () => {
    const { quizzesTitle, quizzesDescription, quizzesIcon } = this.state.headerFormControls;

    const body = {
      quizzesTitle: quizzesTitle.value,
      quizzesDescription: quizzesDescription.value,
      quizzesIcon: quizzesIcon.value,
      quizzes: this.state.quizzes
    };

    try {
      axios.post('quizzes.json', body);

      this.setState(state => ({
        headerControls: false,
        headerFormValid: false,
        quizzes: [],
        headerFormControls: this.createHeaderFormControls()
      }))
    } catch (error) {
      console.log(error)
    }
    // TODO: processing error to component
  };

  render() {
    return (
      <React.Fragment>
        <h2>Создать тест</h2>

        {
          !this.state.headerControls
            ? <QuizHeaderForm
              onSubmit={ this.submitHandler }
              formControls={ this.state.headerFormControls }
              onInputChange={ this.onHeaderInputChangeHandler }
              formValid={ this.state.headerFormValid }
              showMainFormHandler={ this.showMainFormHandler }
            />
            : <QuizMainForm
              onSubmit={ this.submitHandler }
              formControls={ this.state.formControls }
              rightAnswer={ this.state.rightAnswer }
              onInputChange={ this.onMainInputChangeHandler }
              onSelectChange={ this.onSelectChangeHandler }
              formValid={ this.state.mainFormValid }
              quizzesLength={ this.state.quizzes.length }
              addQuestionsHandler={ this.addQuestionsHandler }
              createQuizHandler={ this.createQuizHandler }
            />
        }

      </React.Fragment>
    )
  }
}

export default QuizCreator;
