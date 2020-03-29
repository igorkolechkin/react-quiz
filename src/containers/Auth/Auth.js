import React, { Component } from 'react';
import axios from 'axios';
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

  getAuth(link) {
    try {
      const url = `${link}?key=AIzaSyDGi9hvLDiMy-_UaOAqqqGuGhBvL_9i6-A`;
      const params = {
        email: this.state.formControls.email.value,
        password: this.state.formControls.password.value,
        returnSecureToken: true
      };

      return axios.post(url, params);
    } catch (error) {
      return error
    }
  }

  loginHandler = async () => {
    await this.getAuth('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword');
  };

  registerHandler = async () => {
    await this.getAuth('https://identitytoolkit.googleapis.com/v1/accounts:signUp');
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
