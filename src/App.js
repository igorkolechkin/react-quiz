import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from '@containers/Header';
import Auth from '@containers/Auth';
import Quizzes from '@containers/Quizzes';
import Quiz from '@containers/Quiz';
import QuizCreator from '@containers/QuizCreator';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />

        <main className="layout container">
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/quiz-creator" component={QuizCreator} />
            <Route path="/quiz/:id" component={Quiz} />
            <Redirect from='/quiz' to='/' />
            <Route exact path="/" component={Quizzes} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

export default App;
