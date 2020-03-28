import React, { Component } from 'react';
import Input from '@components/UI/Input';
import Button from '@components/UI/Button';
import { changeInput } from '@helpers/FormValid'

import styles from './Auth.module.scss';

class Auth extends Component {
  state = {
    formValid: false,
    formControls: {
      email: {
        value: '',
        type: 'email',
        label: 'Email',
        errorMessage: 'Введите корректный email',
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true
        }
      },
      password: {
        value: '',
        type: 'password',
        name: 'password',
        label: 'Пароль',
        errorMessage: 'Введите корректный пароль',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6
        }
      }
    }
  };

  submitHandler(e) {
    e.preventDefault();
  }

  onInputChangeHandler = (value, controlName) => {
    const controls = {...this.state.formControls};
    const {formControls, formValid} = changeInput(controls, controlName, value);

    this.setState({ formControls, formValid })
  };

  loginHandler = () => {

  };

  registerHandler = () => {

  };

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];

      return (
        <Input
          key={ index }
          value={ control.value }
          type={ control.type }
          name={ control.name || control.type }
          label={ control.label }
          errorMessage={ control.errorMessage }
          valid={ control.valid }
          touched={ control.touched }
          onChange={ e => this.onInputChangeHandler(e.target.value, controlName) }/>
      )
    });
  }

  render() {
    return (
      <React.Fragment>
        <h2>Авторизация</h2>

        <form
          className={ styles.form }
          onSubmit={ this.submitHandler } >

          { this.renderInputs() }

          <div className={ styles.buttons }>
            <Button onClick={ this.loginHandler }
                    disabled={ !this.state.formValid } >Войти</Button>
            <Button onClick={ this.registerHandler }
                    disabled={ !this.state.formValid } >Зарегестрироватсья</Button>
          </div>
        </form>
      </React.Fragment>
    )
  }
}

export default Auth;
