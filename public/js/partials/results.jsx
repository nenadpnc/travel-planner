import React from 'react';
import {render} from 'react-dom';

const Results = React.createClass({


    render() {
        return (
            <div className="results-wrapper">
                <div className="col-2">
                    <h3 className="result-title"><span className="flaticon-icon-181686"></span> Flights</h3>
                    <div className="result-box">
                        <div className="flight-info">
                            <span className="font-small color-light">British Airlines</span>
                            <span className="price">143 $</span>
                        </div>
                        <div className="flight-info">
                            <div className="start">
                                <span>
                                    <span className="bold">BEL 17:55 -- 19:25 FCO </span> 
                                    <span className="flaticon-icon-158225"></span> 
                                    <span className="font-small color-light"> 1:35 direct</span>
                                </span>
                            </div>
                            <div className="end">
                                <span>
                                    <span className="bold">BEL 17:55 -- 19:25 FCO </span> 
                                    <span className="flaticon-icon-158225"></span> 
                                    <span className="font-small color-light"> 1:35 direct</span>
                                </span>
                            </div>
                        </div>
                        <div className="flight-info text-right">
                            <span className="font-small color-light">Economy</span>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <h3><span className="flaticon-icon-175614"></span> Appartments</h3>
                </div>
            </div>
        );
    }
});

module.exports = Results;