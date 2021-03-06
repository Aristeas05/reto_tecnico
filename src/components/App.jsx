import '../styles/App.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages/home';
import Data from './pages/data';
import End from './pages/end';

const App = () => (
  <Router>
    <Switch>
    <Route path="/" exact component={ Home }/>
    <Route path="/data" exact component={ Data }/>
    <Route path="/end" exact component={ End }/>
    </Switch>
  </Router>
)
export default App;
