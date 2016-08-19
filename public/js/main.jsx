require("./../style/style.less");
window.$ = window.jQuery = require('jquery');
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute  } from 'react-router';
import App from './partials/app.jsx';
import Home from './partials/home.jsx';
import PageNotFound from './partials/pageNotFound.jsx';

ReactDOM.render((
    <Router history = {hashHistory}>
        <Route path = "/" component = {App}>
            <IndexRoute component = {Home} />
            <Route path = "*" component = {PageNotFound} />
        </Route>
    </Router>

), document.getElementById('app'));