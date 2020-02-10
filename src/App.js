import React, { Component } from 'react';
import './App.css';
import TodosView from './views/TodosView';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <Switch>
        <Route path="" component={TodosView} />
      </Switch>
    </Router>
    );
  }
}

export default App;
