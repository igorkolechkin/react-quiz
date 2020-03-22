import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = props => (
  <li>
    {console.log(props)}
    <NavLink
      exact={ props.exact }
      className="nav__link"
      to={ props.to }>{ props.name }</NavLink>
  </li>
);

export default NavItem;
