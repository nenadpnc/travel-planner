import React from 'react';
import {render} from 'react-dom';
import io from 'socket.io-client';
import feathers from 'feathers-client';

const socket = io();
const app = feathers()
    .configure(feathers.socketio(socket, { timeout: 20000 }))
    .configure(feathers.hooks())
    .configure(feathers.authentication({
    storage: window.localStorage
    }));

const searchService = app.service('search');

const Home = React.createClass({
    search() {
        searchService.find({
            query: {
                location: 'Rome, Italy',
                checkin: '09/03/2016',
                checkout: '09/07/2016',
                guests: 2,
                budget: 300
            }
        }).then(function (data) {
            console.log(data);
        });
    },

    render() {
        return (
            <div className="main">
                <form name="searchFrm" className="search">
                    <div className="search-box">
                        <div className="search-container">
                            <div className="search-inputs">
                            <input className="search-input" type="text" name="from" placeholder="From"/>
                            <input className="search-input" type="text" name="to" placeholder="To"/>
                            </div>
                            <div className="search-params">
                            <div className="search-params-box">
                                <span className="search-params-title">check-in</span>
                                <div className="params-wrapper">
                                <span className="params-hero">07</span>
                                <span className="params-small">
                                    <div>August</div>
                                    <div>2016</div>
                                </span>
                                </div>
                            </div>
                            <div className="search-params-box">
                                <span className="search-params-title">check-out</span>
                                <div className="params-wrapper">
                                <span className="params-hero">13</span>
                                <span className="params-small">
                                    <div>August</div>
                                    <div>2016</div>
                                </span>
                                </div>
                            </div>
                            <div className="search-params-box">
                                <span className="search-params-title">adults</span>
                                <div className="params-wrapper">
                                <span className="params-hero">2</span>
                                </div>
                            </div>
                            <div className="search-params-box">
                                <span className="search-params-title">budget</span>
                                <div className="params-wrapper">
                                <span className="params-hero">300</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="search-btn">
                            <a onClick={this.search} className="search-submit">show offers</a>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
})
module.exports = Home;