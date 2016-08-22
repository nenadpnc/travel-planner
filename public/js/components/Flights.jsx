import React from 'react';

const FlightResult = React.createClass({
    render() {
        return (
            <div>
                <div className="result-box">
                    <div className="flight-info">
                        <span className="font-small color-light">British Airlines</span>
                        <span className="price">143 $</span>
                    </div>
                    <div className="flight-info">
                        <div className="start">
                            <span>
                                <span className="bold w-50">BEL 17:55 -- 19:25 FCO </span> 
                                <span className="font-small color-light w-15"><span className="flaticon-icon-158225 mr-10"></span>  1:35 </span>
                                <span className="font-small color-light w-15">direct</span>
                            </span>
                        </div>
                        <div className="end">
                            <span>
                                <span className="bold w-50">BEL 17:55 -- 19:25 FCO </span>
                                <span className="font-small color-light w-15"><span className="flaticon-icon-158225 mr-10"></span>  1:35 </span>
                                <span className="font-small color-light w-15">1 stop</span>
                            </span>
                        </div>
                    </div>
                    <div className="flight-info text-right">
                        <span className="font-small color-light">Economy</span>
                    </div>
                </div>
                <div className="result-box">
                    <div className="flight-info">
                        <span className="font-small color-light">British Airlines</span>
                        <span className="price">143 $</span>
                    </div>
                    <div className="flight-info">
                        <div className="start">
                            <span>
                                <span className="bold w-50">BEL 17:55 -- 19:25 FCO </span> 
                                <span className="font-small color-light w-15"><span className="flaticon-icon-158225 mr-10"></span>  1:35 </span>
                                <span className="font-small color-light w-15">direct</span>
                            </span>
                        </div>
                        <div className="end">
                            <span>
                                <span className="bold w-50">BEL 17:55 -- 19:25 FCO </span>
                                <span className="font-small color-light w-15"><span className="flaticon-icon-158225 mr-10"></span>  1:35 </span>
                                <span className="font-small color-light w-15">1 stop</span>
                            </span>
                        </div>
                    </div>
                    <div className="flight-info text-right">
                        <span className="font-small color-light">Economy</span>
                    </div>
                </div>
                <div className="result-box">
                    <div className="flight-info">
                        <span className="font-small color-light">British Airlines</span>
                        <span className="price">143 $</span>
                    </div>
                    <div className="flight-info">
                        <div className="start">
                            <span>
                                <span className="bold w-50">BEL 17:55 -- 19:25 FCO </span> 
                                <span className="font-small color-light w-15"><span className="flaticon-icon-158225 mr-10"></span>  1:35 </span>
                                <span className="font-small color-light w-15">direct</span>
                            </span>
                        </div>
                        <div className="end">
                            <span>
                                <span className="bold w-50">BEL 17:55 -- 19:25 FCO </span>
                                <span className="font-small color-light w-15"><span className="flaticon-icon-158225 mr-10"></span>  1:35 </span>
                                <span className="font-small color-light w-15">1 stop</span>
                            </span>
                        </div>
                    </div>
                    <div className="flight-info text-right">
                        <span className="font-small color-light">Economy</span>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = FlightResult;