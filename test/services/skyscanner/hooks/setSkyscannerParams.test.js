'use strict';

const assert = require('assert');
const setSkyscannerParams = require('../../../../src\services\skyscanner\hooks\setSkyscannerParams.js');

describe('skyscanner setSkyscannerParams hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    setSkyscannerParams()(mockHook);

    assert.ok(mockHook.setSkyscannerParams);
  });
});
