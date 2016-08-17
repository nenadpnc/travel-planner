'use strict';

const hooks = require('./hooks');
const request = require('superagent');
const airbnbUrl = 'https://api.airbnb.com/v2/search_results?client_id=3092nxybyb0otqw18e8nh5nty';
var params = {
  locale: 'en-US',
  currency: 'EUR',
  _format: 'for_search_results_with_minimal_pricing',
  _limit: 10,
  _offset: 0,
  guests: 2,
  location: '',
  user_lat: 37.18722222222222,
  user_lng: -122.42833333333333
};

function getAirbnbUrl() {
  
}

class Service {
  constructor(options) {
    this.options = options || {};
  }

  find(params) {
    var promise = new Promise((resolve, reject) => {
      request.get(airbnbUrl).end((err, res) => {
        if (!err) {
          let data = JSON.parse(res.text);
          resolve(data.search_results);
        } else {
          reject();
        }
      })
    });

    return promise;
  }

  get(id, params) {
    return Promise.resolve({
      id, text: `A new message with ID: ${id}!`
    });
  }
}

module.exports = function(){
  const app = this;

  // Initialize our service with any options it requires
  app.use('/airbnb', new Service());

  // Get our initialize service to that we can bind hooks
  const airbnbService = app.service('/airbnb');

  // Set up our before hooks
  airbnbService.before(hooks.before);

  // Set up our after hooks
  airbnbService.after(hooks.after);
};

module.exports.Service = Service;
