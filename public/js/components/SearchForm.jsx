import React from 'react';
import {DateRangePicker} from 'react-dates';

const SearchForm = React.createClass({
    getInitialState() {
        return {
            focusedInput: null,
            startDate: null,
            endDate: null
        }
    },
    handleSearch() {
        this.props.search({
            location: 'Rome, Italy',
            checkin: '09/03/2016',
            checkout: '09/07/2016',
            guests: 2,
            budget: 300
        });
    },
    onDatesChange({ startDate, endDate }) {
        this.setState({ startDate, endDate });
    },
    onFocusChange(focusedInput) {
        this.setState({ focusedInput });
    },
    render() {
        return (
            <form name="searchFrm" className="search">
                <DateRangePicker
                    onDatesChange={this.onDatesChange}
                    onFocusChange={this.onFocusChange}
                    focusedInput={this.state.focusedInput}
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    />
                <div className="search-box">
                    <div className="search-container">
                        <div className="search-inputs">
                            <input className="search-input" type="text" name="from" placeholder="From" onChange={this.props.from}/>
                            <input className="search-input" type="text" name="to" placeholder="To" onChange={this.props.to}/>
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
                        <a onClick={this.handleSearch} className="search-submit">show offers</a>
                    </div>
                </div>
            </form>
        );
    }

});

module.exports = SearchForm;