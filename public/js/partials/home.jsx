import React from 'react'
import {render} from 'react-dom'

const Home = React.createClass({
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
                            <a className="search-submit">show offers</a>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
})
module.exports = Home;