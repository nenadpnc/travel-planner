require("./../style/style.less");
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import App from './partials/app.jsx';
import Home from './partials/home.jsx';
import PageNotFound from './partials/pageNotFound.jsx';

ReactDOM.render((
    <Router history = {browserHistory}>
        <Route path = "/" component = {App}>
            <IndexRoute component = {Home} />
            <Route path = "*" component = {PageNotFound} />
        </Route>
    </Router>

), document.getElementById('app'));