'use strict';

const hooks = require('./hooks');

class Service {
  constructor(options) {
    this.options = options || {};
  }

  find(params) {
    const airbnbService = this.options.service('airbnb');
    const skyscannerService = this.options.service('skyscanner');
    return Promise.all([airbnbService.find(params), skyscannerService.find(params)]).catch((err) => {
      console.log(err);
    });
  }
}

module.exports = function(){
  const app = this;

  // Initialize our service with any options it requires
  app.use('/search', new Service(app));

  // Get our initialize service to that we can bind hooks
  const searchService = app.service('/search');

  // Set up our before hooks
  searchService.before(hooks.before);

  // Set up our after hooks
  searchService.after(hooks.after);
};

module.exports.Service = Service;
