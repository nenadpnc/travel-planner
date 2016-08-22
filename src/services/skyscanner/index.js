'use strict';

const hooks = require('./hooks');
const skyscanner = require('skyscannerjs');
const apiKey = "ne511791269796320730176738482525";
const api = new skyscanner.API(apiKey);

class Service {
  constructor(options) {
    this.options = options || {};
  }

  find(params) {
    let promise = new Promise((resolve, reject) => {
      api.flights.livePrices.session(params.sessionParams).then((response) => {
        api.flights.livePrices.poll(response.headers.location, params.pollingParams).then((response) => {
            resolve(response.data);
        }).catch(reject());
      }).cath(reject());
    });

    return promise;

  }
}

module.exports = function(){
  const app = this;

  // Initialize our service with any options it requires
  app.use('/skyscanner', new Service());

  // Get our initialize service to that we can bind hooks
  const skyscannerService = app.service('/skyscanner');

  // Set up our before hooks
  skyscannerService.before(hooks.before);

  // Set up our after hooks
  skyscannerService.after(hooks.after);
};

module.exports.Service = Service;
