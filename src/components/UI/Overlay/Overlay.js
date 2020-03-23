import React from 'react';

const Overlay = props => {

  const classes = [
    'header__bg overlay',
    props.isOpen ? 'show' : null
  ];

  return (
    <div className={ classes.join(' ') }
         onClick={ props.onToggleMenu } />
  );
};

export default Overlay;
