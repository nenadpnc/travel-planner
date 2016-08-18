'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const setAirbnbParams = require('./setAirbnbParams')



exports.before = {
  all: [],
  find: [setAirbnbParams()],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
