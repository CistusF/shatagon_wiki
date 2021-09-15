import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter as Router, } from 'react-router-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Wiki from './Wiki';
import Editor from './Editor';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/wiki" component={Wiki} />
        <Route exact path="/editor" component={Editor} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
