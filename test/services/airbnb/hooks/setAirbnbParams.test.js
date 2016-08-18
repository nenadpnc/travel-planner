'use strict';

const assert = require('assert');
const setAirbnbParams = require('../../../../src\services\airbnb\hooks\setAirbnbParams.js');

describe('airbnb setAirbnbParams hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    setAirbnbParams()(mockHook);

    assert.ok(mockHook.setAirbnbParams);
  });
});
