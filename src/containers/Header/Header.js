import React, { Component } from 'react';
import NavToggler from '@components/Header/NavToggler';
import NavList from '@components/Header/NavList';

class Header extends Component {
  state = {
    menuOpen: false,
    nav: [
      {to: '/', name: 'Список', exact: true},
      {to: '/auth', name: 'Авторизация', exact: false},
      {to: '/quiz-creator', name: 'Создать тест', exact: false}
    ]
  };

  onClickHandler = () => {
    this.setState({ menuOpen: !this.state.menuOpen })
  };

  render() {
    return (
      <header>
        <NavToggler
          isOpen={ this.state.menuOpen }
          onClick={ this.onClickHandler } />

        <NavList
          isOpen={ this.state.menuOpen }
          nav={ this.state.nav } />
      </header>
    )
  }
}

export default Header;
