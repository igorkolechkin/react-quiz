import React, { Component } from 'react';
import Quiz from '@containers/Quiz';
import Header from '@containers/Header';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />

        <main className="layout">
          <Quiz />
        </main>
      </React.Fragment>
    )
  }
}

export default App;
