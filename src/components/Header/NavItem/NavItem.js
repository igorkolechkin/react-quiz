import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = props => (
  <li>
    <NavLink
      exact={ props.exact }
      className="nav__link"
      to={ props.to }
      onClick={ props.onToggleMenu }>{ props.name }</NavLink>
  </li>
);

export default NavItem;
