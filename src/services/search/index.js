'use strict';

const hooks = require('./hooks');
var request = require('superagent');

class Service {
  constructor(options) {
    this.options = options || {};
  }

  find(params) {
    var options = {
      url: 'https://api.airbnb.com/v2/search_results?client_id=3092nxybyb0otqw18e8nh5nty',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    var p = new Promise((resolve, reject) => {
        request.get('https://api.airbnb.com/v2/search_results?client_id=3092nxybyb0otqw18e8nh5nty&locale=en-US&currency=USD&_format=for_search_results_with_minimal_pricing&_limit=10&_offset=0&fetch_facets=true&guests=1&ib=false&ib_add_photo_flow=true&location=Lake%20Tahoe%2C%20CA%2C%20US&min_bathrooms=0&min_bedrooms=0&min_beds=1&min_num_pic_urls=10&price_max=210&price_min=40&sort=1&user_lat=37.3398634&user_lng=-122.0455164', (err, response) => {
          if (err) {
            reject();
          } else {
            resolve(response);
          }
        });
    });

    return p;
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
