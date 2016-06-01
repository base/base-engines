/*!
 * base-engines (https://github.com/node-base/base-engines)
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var debug = require('debug')('base-engines');

module.exports = function(config) {
  return function(app) {
    if (this.isRegistered('base-engines')) return;
    debug('initializing "%s", from "%s"', __filename, module.parent.id);

    this.define('engines', function() {
      debug('running engines');
      
    });
  };
};
