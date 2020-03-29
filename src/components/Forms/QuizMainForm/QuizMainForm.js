import React from 'react';
import Input from '@components/UI/Input';
import Select from '@components/UI/Select';
import Button from '@components/UI/Button';

function renderFormControls(formControls, onInputChange) {
  return Object.keys(formControls).map((controlName, index) => {
    const control = formControls[controlName];

    return (
      <Input
        key={index}
        value={control.value}
        type={control.type || 'text'}
        id={control.id}
        label={control.label}
        errorMessage={control.errorMessage}
        valid={control.valid}
        touched={control.touched}
        onChange={e => onInputChange(e.target.value, controlName)}
      />
    )
  })
}

function renderFormSelect(rightAnswer, onSelectChange) {
  return (
    <Select
      label="Выберите правельный ответ"
      options={[
        {value: 'answer1', text: 'Ответ №1'},
        {value: 'answer2', text: 'Ответ №2'},
        {value: 'answer3', text: 'Ответ №3'},
        {value: 'answer4', text: 'Ответ №4'}
      ]}
      value={rightAnswer}
      onChange={e => onSelectChange(e.target.value)}
    />
  )
}

const QuizMainForm = props => (
  <form onSubmit={ props.onSubmit }>
    { renderFormControls(props.formControls, props.onInputChange) }
    { renderFormSelect(props.rightAnswer, props.onSelectChange) }

    <div className="buttons-wrapper">
      <Button
        disabled={ !props.formValid }
        onClick={ props.addQuestionsHandler }
      >
        Добавить вопрос
      </Button>

      <Button
        disabled={ props.quizzesLength === 0 }
        onClick={ props.createQuizHandler }
      >
        Создать тест
      </Button>
    </div>
  </form>
);

export default QuizMainForm;
