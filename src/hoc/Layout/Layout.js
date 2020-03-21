import React, { Component } from 'react';
import styles from './layout.module.scss';

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <main className={ styles.layout }>
          { this.props.children }
        </main>
      </React.Fragment>
    )
  }
}

export default Layout;
