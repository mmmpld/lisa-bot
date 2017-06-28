"use strict";

const {
    isArray,
    isObject
} = require("lodash");

const objectEach = require("./objectEach");

const format = function (val, indentation) {
    if (isObject(val)) {
        const result = [];


        return result.join("\n");
    }
};

module.exports = function (obj) {
    const objStripped = JSON.parse(JSON.stringify(obj));

    return format(objStripped, 0);
};
