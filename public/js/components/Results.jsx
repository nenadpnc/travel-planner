import React from 'react';
import Flights from './Flights.jsx';
import Appartments from './Appartments.jsx';

const Results = React.createClass({
    render() {
        return (
            <div className="results-wrapper">
                <div className="col-2">
                    <h3 className="result-title"><span className="flaticon-icon-181686"></span> Flights</h3>
                    <Flights data={this.props.data[0]} />
                </div>
                <div className="col-2">
                    <h3><span className="flaticon-icon-175614"></span> Appartments</h3>
                    <Appartments data={this.props.data[1]} />
                </div>
            </div>
        );
    }
});

module.exports = Results;