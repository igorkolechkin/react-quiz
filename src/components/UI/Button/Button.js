import React from 'react';
import styles from './Button.module.scss';

const Button = props => {
  const classes = [styles.btn, styles[props.type]];
console.log(props)
  return (
    <button
      className={ classes.join(' ') }
      onClick={ props.onClick}
      disabled={ props.disabled ? props.disabled : null } >
      { props.children }
    </button>
  )
};

export default Button;
