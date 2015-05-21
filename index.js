'use strict'

/*!
 * constructor.
 */

var Ctor = function () {}

/*!
 * exports.
 */

module.exports = create

/**
 * Portable Object.create that is not a shim and
 * drops the verbose property descriptor syntax.
 *
 * @param {Object} prototype
 * The object which should be the prototype of the newly-created object.
 *
 * @return {String}
 * New object with the specified prototype object.
 */

function create (prototype) {
  Ctor.prototype = prototype || {}
  return new Ctor()
}
