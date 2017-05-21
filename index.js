/**
 * @fileOverview This file contains the `prototypeof` module. It also
 * allows getting/setting the the object string descriptor.
 * @name index.js<prototypeof>
 * @module prototypeof
 * @author Etienne Prud’homme <e.e.f.prudhomme@gmail.com>
 *
 * Last-Updated: Sat May 20 21:59:16 (EDT) 2017 by etienne
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
 *   See:
 *   https://tc39.github.io/ecma262/#sec-object.prototype.tostring
 *
 *   NOTE: Even forbidden special characters can be a variable (or a
 *   property of the global object) since:
 *
 *       global['1 🚀}']
 *
 *   is a valid variable. Where global is the global context.
 *
 * Code:
 */

const objProtoRegexp = /^\[object (.+)\]$/;


/**
 * Get the type of an object and optionally set its type. If the
 * object has prototype, set the prototypal type.
 * @param {*} object - Any objects or primitives.
 * @param {String} [type] - If truthy, set the type name.
 * @returns {String} The object type name.
 */
function prototypeof(object, type) {
    var string = '';
    var _object = object;

    if(type) {
        if(_object.prototype) {
            _object.prototype[Symbol.toStringTag] = type;
        }
        _object[Symbol.toStringTag] = type;
    }
    string = Reflect.apply(Object.prototype.toString, object, []);

    return objProtoRegexp.exec(string)[1];
}

module.exports = prototypeof;

// index.js<prototypeof> ends here
