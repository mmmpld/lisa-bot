"use strict";

const {
    isObject,
    isNil
} = require("lodash");
const {
    decycle
} = require("./cycle");

const BLOCKED_KEYS = ["client", "_client", "guild", "_guild", "_rest", "$ref", "lastMessage"];

const eachObject = function (obj, fn) {
    const keys = Object.keys(obj);

    keys.forEach((key, index) => {
        fn(obj[key], key, index);
    });
};

const strip = function (obj) {
    const result = {};

    eachObject(obj, (val, key) => {
        if (!isNil(val) && !BLOCKED_KEYS.includes(key)) {
            if (val.array) {
                result[key] = val.array();
            } else if (isObject(val)) {
                result[key] = strip(val);
            } else {
                result[key] = val;
            }
        }
    });

    return result;
};

module.exports = function (obj) {
    const result = Object.assign({}, obj);

    return strip(decycle(result));
};
