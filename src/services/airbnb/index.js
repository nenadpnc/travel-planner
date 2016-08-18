'use strict';

const hooks = require('./hooks');
const airbnbApi = require('airapi');

class Service {
  constructor(options) {
    this.options = options || {};
  }

  find(params) {
    return airbnbApi.search(params.airbnbOptions);
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
