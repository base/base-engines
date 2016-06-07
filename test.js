'use strict';

require('mocha');
var assert = require('assert');
var engines = require('./');
var App = require('base');
var app;

describe('.engines', function() {
  beforeEach(function() {
    app = new App({isApp: true});
    app.use(engines());
  });

  it('should throw an error when engine name is invalid:', function(cb) {
    try {
      app.engine(null, {});
      cb(new Error('expected an error'));
    } catch (err) {
      assert.equal(err.message, 'expected engine ext to be a string or array.');
      cb();
    }
  });

  it('should register an engine to the given extension', function() {
    app.engine('hbs', function() {});
    assert.equal(typeof app.engines['.hbs'], 'object');
  });

  it('should set an engine with the given extension', function() {
    var hbs = function() {};
    hbs.render = function() {};
    hbs.renderFile = function() {};
    app.engine('hbs', hbs);
    assert(app.engines['.hbs']);
    assert(app.engines['.hbs'].renderFile);
    assert(app.engines['.hbs'].render);
  });

  it('should get an engine:', function() {
    app.engine('hbs', function() {});
    var hbs = app.engine('hbs');
    assert.equal(typeof hbs, 'object');
    assert(hbs.hasOwnProperty('render'));
    assert(hbs.hasOwnProperty('compile'));
  });

  it('should return undefined if no engine is found:', function() {
    var hbs = app.getEngine();
    assert.equal(typeof hbs, 'undefined');
  });

  it('should register an engine with multiple extensions', function() {
    app.engine(['hbs', 'md'], function() {});
    assert(app.engines.hasOwnProperty('.hbs'));
    assert(app.engines.hasOwnProperty('.md'));
  });
});
