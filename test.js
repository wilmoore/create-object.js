'use strict'

/*!
 * imports.
 */

var test = require('tape-catch')

/*!
 * imports (local).
 */

var create = require('./')

/*!
 * tests.
 */

test('create()', function (t) {
  var actual

  actual = create()
  t.deepEqual(actual, {}, 'empty object')

  actual = create({ greeting: 'hello' })
  t.deepEqual(actual.greeting, 'hello', 'single property object')

  actual = create({
    name: 'attr',
    init: function () { return this.name }
  })
  t.deepEqual(actual.init(), 'attr', 'method call')

  actual = create({ greeting: 'hello' }, { name: 'world' })
  t.deepEqual(actual.name, 'world', 'properties')

  t.end()
})
