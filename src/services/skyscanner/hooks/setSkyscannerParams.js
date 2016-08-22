'use strict';

// src\services\skyscanner\hooks\setSkyscannerParams.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const sessionDefaults = {
  country: "UK",
  currency: "EUR",
  locale: "en-GB",
  locationSchema: "Iata",
  originplace: "EDI",
  destinationplace: "LHR",
  outbounddate: "2016-09-16",
  inbounddate: '2016-09-23',
  adults: 2,
  groupPricing: true,
  cabinclass: 'Economy'
};

const pollDefaults = {
  duration: 1800,
  stops: 3
};

const setSessionParams = query => {
  let params = {

  };

  return Object.assign({}, sessionDefaults, params);
};

const setPollingParams = query => {
  let params = {
    
  };

  return Object.assign({}, pollDefaults, params);
};

module.exports = function(options) {
  return function(hook) {
    hook.params.sessionParams = setSessionParams(hook.params.query);
    hook.params.pollingParams = setPollingParams(hook.params.query);
  };
};
