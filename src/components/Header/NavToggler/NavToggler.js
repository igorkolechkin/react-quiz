import React from 'react';
import styles from './NavToggler.module.scss';

const NavToggler = props => {
  const classes = [
    'fa',
    styles.btn,
    props.isOpen ? `fa-times ${styles.open}` : 'fa-bars'
  ];

  return (
    <i className={ classes.join(' ') }
       onClick={ props.onClick } />
  )
};

export default NavToggler;
