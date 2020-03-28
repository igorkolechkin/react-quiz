import React, {Component} from 'react';
import Input from '@components/UI/Input';
import Select from '@components/UI/Select';
import Button from '@components/UI/Button';
import { changeInput } from '@helpers/FormValid';

class QuizCreator extends Component {
  state = {
    formValid: false,
    rightAnswer: 'answer1',
    quizzes: [],
    formControls: this.createFormControls()
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

  onInputChangeHandler = (value, controlName) => {
    let controls = {...this.state.formControls};
    const {formControls, formValid} = changeInput(controls, controlName, value);

    this.setState({ formControls, formValid })
  };

  onChangeSelectHandler = value => this.setState({ rightAnswer: value });

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

  createQuizHandler = () => {
    console.log(this.state.quizzes)
  };

  renderFormControls() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];

      return (
        <Input
          key={ index }
          value={ control.value }
          type={ control.type || 'text' }
          id={ control.id }
          label={ control.label }
          errorMessage={ control.errorMessage }
          valid={ control.valid }
          touched={ control.touched }
          onChange={ e => this.onInputChangeHandler(e.target.value, controlName) }
        />
      )
    })
  }

  renderFormSelect() {
    return (
      <Select
        label="Выберите правельный ответ"
        options={[
          {value: 'answer1', text: 'Ответ №1'},
          {value: 'answer2', text: 'Ответ №2'},
          {value: 'answer3', text: 'Ответ №3'},
          {value: 'answer4', text: 'Ответ №4'}
        ]}
        value={ this.state.rightAnswer }
        onChange={ e => this.onChangeSelectHandler(e.target.value) }
      />
    )
  }

  render() {
    return (
      <React.Fragment>
        <h2>Создать тест</h2>

        <form onSubmit={ this.submitHandler }>
          { this.renderFormControls() }
          { this.renderFormSelect() }

          <div className="buttons-wrapper">
            <Button
              disabled={ !this.state.formValid }
              onClick={ this.addQuestionsHandler }
            >
              Добавить вопрос
            </Button>

            <Button
              disabled={ this.state.quizzes.length === 0 }
              onClick={ this.createQuizHandler }
            >
              Создать тест
            </Button>
          </div>
        </form>
      </React.Fragment>
    )
  }
}

export default QuizCreator;
