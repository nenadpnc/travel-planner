import React from 'react'
import {render} from 'react-dom'
import { MultiMonthView } from 'react-date-picker'
import 'react-date-picker/index.css'

const Home = React.createClass({
    getDefaultProps(){
        const now = Date.now()
        const hour = 1000 * 60 * 60
        const day = 24 * hour
        return {
            now: now,
            in3days: now + day * 3
        };
    },
    clickHandler(event){
        event.target.parentElement.className += ' show-calendar';
    },
    searchMe(date1, date2){
        console.log(date1);
        console.log(date2);
    },
    render() {
        return (
            <div className="main">
                <form name="searchFrm" className="search">
                    <div className="search-box">
                        <div className="search-container">
                            <div className="search-inputs">
                            <input className="search-input" onClick={this.clickHandler} type="text" name="from" placeholder="From"/>
                            <input className="search-input" type="text" name="to" placeholder="To"/>
                            <MultiMonthView
                            locale="de"
                            highlightRangeOnMouseMove={true}
                            footer={true}
                            defaultRange={[]}
                            />
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