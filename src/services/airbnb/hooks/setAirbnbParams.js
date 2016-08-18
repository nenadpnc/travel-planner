'use strict';

// src\services\airbnb\hooks\setAirbnbParams.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const airbnbUrl = 'https://api.airbnb.com/v2/search_results?';
const defaults = {
  client_id: '3092nxybyb0otqw18e8nh5nty',
  locale: 'en-US',
  currency: 'EUR',
  check_in: '09/23/2016',
  check_out: '09/29/2016',
  _format: 'for_search_results_with_minimal_pricing',
  _limit: 10,
  _offset: 0,
  guests: 2,
  location: 'Rome, Italy',
  user_lat: 37.18722222222222,
  user_lng: -122.42833333333333,
  price_max: 40
};

const getAirbnbUrl = query => {
  let url = airbnbUrl;
  for (let prop in defaults) {
    if (defaults.hasOwnProperty(prop)) {
      url += prop + '=' + encodeURIComponent(defaults[prop]) + '&';
    }
  }

  //remove last '&' character 
  url = url.slice(0, -1);

  return url;
}

module.exports = function(options) {

  return function(hook) {
    hook.params = Object.assign({}, hook.params, {
      airbnbUrl: getAirbnbUrl(hook.params.query)
    });
  };
};
