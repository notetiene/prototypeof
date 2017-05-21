/**
 * @fileOverview This file contains unit tests for the `prototypeof`
 * module.
 * @name test.js<prototypeof>
 * @author Etienne Prud’homme <e.e.f.prudhomme@gmail.com>
 *
 * Last-Updated: Sat May 20 23:07:33 (EDT) 2017 by etienne
 * Created: 2017-05-20
 *
 * @license MIT License
 *
 * Copyright (c) 2017 Etienne Prud’homme
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use, copy,
 * modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions: The above
 * copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 * BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * Commentary:
 *
 * Code:
 */

const testIt      = require('ava');
const prototypeof = require('./');

/**
 * Custom class type.
 */
class Type {

    /* eslint-disable no-useless-constructor */
    /**
     * Do something for the Type.
     */
    constructor() {
        // Do something
    }
    /* eslint-enable no-useless-constructor */

}

/* jshint -W071 */
/* eslint-disable max-statements */
testIt((_test) => {
    var foobar = null;

    _test.is(prototypeof(Type), 'Function',
             'The ‘Type’ class refers to ‘Function’ type.');
    foobar = new Type();
    _test.is(prototypeof(Type), 'Function',
             'After making an instance of ‘Type’, ' +
             'the ‘Type’ class refers to ‘Function’ type.');
    _test.is(prototypeof(foobar), 'Object',
             'Creating an instance of ‘Type’ has an ‘Object’ type.');

    _test.is(prototypeof(foobar, 'foo'), 'foo',
             'Setting the type of a ‘Type’ instance returns the type.');
    _test.is(prototypeof(foobar), 'foo',
             'Setting the type of a ‘Type’ instance change its type.');
    _test.is(prototypeof(Type), 'Function',
             '‘Type’ instances don’t alter the ‘Type’ class when setting' +
             ' their types.');

    foobar = new Type();
    _test.is(prototypeof(foobar), 'Object',
             '‘foobar’ now has the ‘Object’ type.');
    _test.is(prototypeof(Type, 'barbar'), 'barbar',
             'Setting the type of the ‘Type’ class returns the new type.');
    _test.is(prototypeof(Type), 'barbar',
             'Setting the type of the ‘Type’ class change its type.');
    _test.is(prototypeof(foobar), 'barbar',
             'Changing the type of the ‘Type’ class alter the types of ' +
             '‘Type’ instances.');
    _test.is(prototypeof(foobar, 'foobar'), 'foobar',
             'Setting the type of the ‘Type’ instances when it is modified' +
             ' return their new types.');
    _test.is(prototypeof(foobar), 'foobar',
             'Setting the type of the ‘Type’ instances when it is modified' +
             ' alter their types.');
});
/* eslint-enable max-statements */
/* jshint +W071 */

// test.js<prototypeof> ends here
