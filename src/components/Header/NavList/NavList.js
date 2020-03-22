import React from 'react';
import NavItem from '@components/Header/NavItem';

import styles from './NavList.module.scss';

const NavList = props => {
  const classes = [
    styles.nav,
    props.isOpen ? styles.open : null
  ];

  return (
    <ul className={ classes.join(' ') }>
      { props.nav.map((item, index) => {
        return (
          <NavItem
            key={ index }
            link={ item.link }
            name={ item.name } />
        )
      })
      }
    </ul>
  )
};

export default NavList;
