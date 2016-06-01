'use strict';

require('mocha');
var assert = require('assert');
var engines = require('./');

describe('base-engines', function() {
  it('should export a function', function() {
    assert.equal(typeof engines, 'function');
  });

  it('should export an object', function() {
    assert(engines);
    assert.equal(typeof engines, 'object');
  });

  it('should throw an error when invalid args are passed', function(cb) {
    try {
      engines();
      cb(new Error('expected an error'));
    } catch (err) {
      assert(err);
      assert.equal(err.message, 'expected first argument to be a string');
      assert.equal(err.message, 'expected callback to be a function');
      cb();
    }
  });
});
