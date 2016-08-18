'use strict';

const hooks = require('./hooks');
const skyscanner = require('skyscannerjs');
const apiKey = "ne511791269796320730176738482525";
const api = new skyscanner.API(apiKey);

const getSession = params => {
  return api.flights.livePrices.session({
        country: "UK",
        currency: "GBP",
        locale: "en-GB",
        locationSchema: "Iata",
        originplace: "EDI",
        destinationplace: "LHR",
        outbounddate: "2016-09-16",
        adults: 2
    });
};

class Service {
  constructor(options) {
    this.options = options || {};
  }

  find(params) {
    let promise = new Promise((resolve, reject) => {
      getSession(params).then((response) => {
        api.flights.livePrices.poll(response.headers.location).then((response) => {
            const itineraries = response.data.Itineraries;
            const legs = response.data.legs;

            resolve(response.data);
        })
      })
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
