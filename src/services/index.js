'use strict';
const skyscanner = require('./skyscanner');
const airbnb = require('./airbnb');
const search = require('./search');
const authentication = require('./authentication');
const user = require('./user');
const mongoose = require('mongoose');
module.exports = function() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.configure(authentication);
  app.configure(user);
  app.configure(search);
  app.configure(airbnb);
  app.configure(skyscanner);
};
