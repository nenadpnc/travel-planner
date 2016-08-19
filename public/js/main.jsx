require("./../style/style.less");
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import App from './partials/app.jsx';
import Home from './partials/home.jsx';
import PageNotFound from './partials/pageNotFound.jsx';
const io = require('socket.io-client');
const feathers = require('feathers-client');

const socket = io();
const app = feathers()
    .configure(feathers.socketio(socket, { timeout: 20000 }))
    .configure(feathers.hooks())
    .configure(feathers.authentication({
    storage: window.localStorage
    }));

const searchService = app.service('search');

// searchService.find({
//     query: {
//         location: 'Rome, Italy',
//         checkin: '09/03/2016',
//         checkout: '09/07/2016',
//         guests: 2,
//         budget: 300
//     }
// }).then(function (data) {
//     console.log(data);
// });

ReactDOM.render((
    <Router history = {browserHistory}>
        <Route path = "/" component = {App}>
            <IndexRoute component = {Home} />
            <Route path = "*" component = {PageNotFound} />
        </Route>
    </Router>

), document.getElementById('app'));