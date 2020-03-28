import React from 'react';
import styles from './Input.module.scss';

function isInvalid({valid, touched}) {
  return !valid && touched;
}

const Input = props => {
  const inputWrapClass = [
    styles.wrapper,
    isInvalid(props) ? styles.error : null
  ];

  return (
    <div className={ inputWrapClass.join(' ') }>
      <label htmlFor={ props.id }>{ props.label }</label>
      <input
        id={ props.id }
        value={props.value}
        type={ props.type }
        onChange={ props.onChange } />
      <span>{ isInvalid(props) ? props.errorMessage : null }</span>
    </div>
  )
};

export default Input;
