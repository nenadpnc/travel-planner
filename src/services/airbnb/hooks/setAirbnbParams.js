'use strict';

// src\services\airbnb\hooks\setAirbnbParams.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const utils = require('../../utils/utils');
const airbnbUrl = 'https://api.airbnb.com/v2/search_results?';
const defaults = {
      currency: 'EUR',
      locale: 'en-US',
      superhost: false,
      ib: false,
      room_types: ['Entire home/apt', 'Private room', 'Shared room']
};

const setParams = query => {
  let params = {
    location: query.location,
    checkin: query.checkin,
    checkout: query.checkout,
    guests: query.guests,
    superhost: query.superhost || defaults.superhost,
    ib: query.ib || defaults.ib,
    room_types: query.room_types || defaults.room_types
  };

  //calculate max price per day
  if (query.budget) {
    let numDays = utils.getNumDays(new Date(query.checkin), new Date(query.checkout));
    params.max_price = Math.floor(parseInt(query.budget) / numDays);
  }

  return Object.assign({}, defaults, params);
}

module.exports = function(options) {

  return function(hook) {
    hook.params.airbnbOptions = setParams(hook.params.query);
  };
};
