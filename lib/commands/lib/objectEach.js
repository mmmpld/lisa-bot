"use strict";

module.exports = function (obj, fn) {
    const keys = Object.keys(obj);

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const val = obj[key];

        fn(val, key, i);
    }
};
