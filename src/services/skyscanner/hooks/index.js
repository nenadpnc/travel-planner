'use strict';

const inflateFlightResults = require('./inflateFlightResults');
const setSkyscannerParams = require('./setSkyscannerParams');

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');

exports.before = {
  all: [],
  find: [setSkyscannerParams()],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};

exports.after = {
  all: [],
  find: [inflateFlightResults()],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
