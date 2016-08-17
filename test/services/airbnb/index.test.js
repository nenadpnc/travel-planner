'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('airbnb service', function() {
  it('registered the airbnbs service', () => {
    assert.ok(app.service('airbnbs'));
  });
});
