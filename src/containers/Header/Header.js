import React, { Component } from 'react';
import NavToggler from '@components/Header/NavToggler';
import NavList from '@components/Header/NavList';
import Overlay from '@components/UI/Overlay';

class Header extends Component {
  state = {
    menuOpen: false,
    nav: [
      {to: '/', name: 'Список', exact: true},
      {to: '/auth', name: 'Авторизация', exact: false},
      {to: '/quiz-creator', name: 'Создать тест', exact: false}
    ]
  };

  onToggleMenuHandler = () => {
    this.setState({ menuOpen: !this.state.menuOpen })
  };

  render() {


    return (
      <header>
        <NavToggler
          isOpen={ this.state.menuOpen }
          onToggleMenu={ this.onToggleMenuHandler } />

        <NavList
          isOpen={ this.state.menuOpen }
          nav={ this.state.nav }
          onToggleMenu={ this.onToggleMenuHandler } />

        <Overlay
          isOpen={ this.state.menuOpen }
          onToggleMenu={ this.onToggleMenuHandler } />
      </header>
    )
  }
}

export default Header;
