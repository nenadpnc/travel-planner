'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('skyscanner service', function() {
  it('registered the skyscanners service', () => {
    assert.ok(app.service('skyscanners'));
  });
});
