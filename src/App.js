import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainView from './views/MainView'
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={MainView} exact />
          <Route path="/:status" component={MainView} />
        </Switch>
      </Router>      
    );
  }
}

export default App;
