'use strict';

const hooks = require('./hooks');
const request = require('request');

class Service {
  constructor(options) {
    this.options = options || {};
  }

  find(params) {
    return Promise.resolve([{ name: 'Appartment1', id: 1}]);
  }

  get(id, params) {
    return Promise.resolve({
      id, text: `A new message with ID: ${id}!`
    });
  }

  create(data, params) {
    if(Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current)));
    }

    return Promise.resolve(data);
  }

  update(id, data, params) {
    return Promise.resolve(data);
  }

  patch(id, data, params) {
    return Promise.resolve(data);
  }

  remove(id, params) {
    return Promise.resolve({ id });
  }
}

module.exports = function(){
  const app = this;

  // Initialize our service with any options it requires
  app.use('/searches', new Service());

  // Get our initialize service to that we can bind hooks
  const searchService = app.service('/searches');

  // Set up our before hooks
  searchService.before(hooks.before);

  // Set up our after hooks
  searchService.after(hooks.after);
};

module.exports.Service = Service;
