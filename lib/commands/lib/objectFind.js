"use strict";

module.exports = function (obj, fn) {
    if (obj instanceof Object) {
        const keys = Object.keys(obj);

        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const val = obj[key];

            if (fn(val, key, i)) {
                return val;
            }
        }

        return false;
    } else {
        throw new TypeError("Not an object");
    }
};
