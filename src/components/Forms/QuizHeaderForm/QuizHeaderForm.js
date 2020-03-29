import React from 'react';
import Input from '@components/UI/Input';
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

const QuizHeaderForm = props => (
  <form onSubmit={ props.onSubmit }>
    { renderFormControls(props.formControls, props.onInputChange) }

    <div className="buttons-wrapper">
      <Button
        disabled={ !props.formValid }
        onClick={ props.showMainFormHandler }
      >
        Добавить вопросы
      </Button>
    </div>
  </form>
);

export default QuizHeaderForm;
