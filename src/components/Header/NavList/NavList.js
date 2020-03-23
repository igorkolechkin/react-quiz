import React from 'react';
import NavItem from '@components/Header/NavItem';

import './NavList.scss';

const NavList = props => {
  const classes = [
    'nav',
    props.isOpen ? 'open' : null
  ];

  return (
    <ul className={classes.join(' ')}>
      {
        props.nav.map((item, index) => {
          return (
            <NavItem
              key={index}
              exact={item.exact}
              to={item.to}
              name={item.name}
              onToggleMenu={ props.onToggleMenu } />
          )
        })
      }
    </ul>
  )
};

export default NavList;
