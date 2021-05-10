import logo from './logo.svg';
import '../styles/App.scss';
import Footer from './atoms/footer.jsx'
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages/home';
import Data from './pages/data';
import Plan from './pages/plan';
import End from './pages/end';
import NotFound from './pages/notFound';

const App = () => (
  <Router>
    <Switch>
    <Route path="/" exact component={ Home }/>
    <Route path="/data" exact component={ Data }/>
    <Route path="/plan" exact component={ Plan }/>
    <Route path="/end" exact component={ End }/>
    <Route component={ () => (
        <NotFound />
      )} />
    </Switch>
  </Router>
)
export default App;
