"use strict";

const fieldDefault = new Array(3).fill((new Array(3)).fill(" "));

const cloneArrDeep = arr => Array.from(arr.map(row => Array.from(row)));

module.exports = function (symbol = "X") {
    return {
        symbol,
        field: cloneArrDeep(fieldDefault)
    };
};
