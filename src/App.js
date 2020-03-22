import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '@containers/Header';
import Auth from '@containers/Auth';
import QuizList from '@containers/QuizList';
import Quiz from '@containers/Quiz';
import QuizCreator from '@containers/QuizCreator';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />

        <main className="layout">
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/quiz-creator" component={QuizCreator} />
            <Route path="/quiz:id" component={Quiz} />
            <Route path="/" component={QuizList} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

export default App;
