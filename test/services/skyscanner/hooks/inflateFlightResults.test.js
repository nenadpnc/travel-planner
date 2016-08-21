'use strict';

const assert = require('assert');
const inflateFlightResults = require('../../../../src\services\skyscanner\hooks\inflateFlightResults.js');

describe('skyscanner inflateFlightResults hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'after',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    inflateFlightResults()(mockHook);

    assert.ok(mockHook.inflateFlightResults);
  });
});
