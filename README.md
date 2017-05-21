# prototypeof [![Build Status](https://travis-ci.org/notetiene/prototypeof.svg?branch=master)](https://travis-ci.org/notetiene/prototypeof)

> 👌 Simply get the type of an object.

**_prototypeof_** is a simple function to get the type of an object by
using `Object.prototype.toString` on any given object. Usually, this
is always the best way to guess the type of an object since `typeof`
may return things not expected (`Array` and `Null` are considered
`object`).

Furthermore, even when using `Object.prototype.toString`, there’s no
easy way to make custom types names. That’s why I created
`prototypeof`.

The name may look misleading (we’re not actually getting the
prototype), but is
_[etymologically](https://en.wikipedia.org/wiki/Etymology)_
correct. Which corresponds to *πρωτο- (prōto-)* (most recent ancestor)
and type.

## Getting Started


```javascript
const prototypeof = require('prototypeof');

class Type {
    constructor() {
    }
}

var type = new Type();
console.log(prototypeof(type)); // "Object"
console.log(prototypeof(Type, 'Type')); // "Type"
console.log(prototypeof(type)); // "Type"
```

## JavaScript API

### prototypeof ( object[, type])
Get the type of an object and optionally set its type. If the object
has a prototype, set the prototypal type. Finally return the type
name.

* `object`: Any objects or primitives.
* `type`: _Optional_. If truthy, set the type name.
* Return: A type name as a `String`.

## License

This module and the whole directory is subject to
the [MIT license](LICENSE.md).

I usually prefer the GPL license, but I don’t think it’s big enough
care for that (and scare people like you).

Copyright (c) 2017 Etienne Prud’homme
