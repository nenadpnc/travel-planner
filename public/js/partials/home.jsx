import React from 'react';
import io from 'socket.io-client';
import feathers from 'feathers-client';

import Results from './../components/Results.jsx';
import SearchFrom from './../components/SearchForm.jsx';

const socket = io();
const app = feathers()
    .configure(feathers.socketio(socket, { timeout: 20000 }))
    .configure(feathers.hooks())
    .configure(feathers.authentication({
        storage: window.localStorage
    }));

const searchService = app.service('search');

const Home = React.createClass({
    search(params) {
        searchService.find({
            query: params
        }).then((data) => { 
            this.setState({data}); 
        }).catch((err) => { 
            console.log(err); 
        });
    },
    
    getInitialState() {
        return { data: [] };
    },

    render() {
        return (
            <div className="main">
                <SearchFrom search={this.search} />
                <Results data={this.state.data} />
            </div>
        );
    }
})
module.exports = Home;