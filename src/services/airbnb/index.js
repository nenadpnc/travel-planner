'use strict';

const hooks = require('./hooks');
const request = require('superagent');
const airbnbUrl = 'https://api.airbnb.com/v2/search_results?client_id=3092nxybyb0otqw18e8nh5nty';

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