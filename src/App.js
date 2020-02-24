import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import MainView from './views/MainView'
import ExampleView from './views/Example';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>  
          <Route path="/" component={MainView} exact />
          <Route path="/All" component={MainView} exact />
          <Route path="/main" component={MainView} exact />
          <Route path="/example" component={ExampleView} />
          <Route path="/:status" component={MainView} />
        </Switch>
      </Router>      
    );
  }
}

export default App;
