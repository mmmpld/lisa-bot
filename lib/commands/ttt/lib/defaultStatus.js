"use strict";

const defaultField = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];

const cloneArrDeep = arr => Array.from(arr.map(row => Array.from(row)));

module.exports = function (symbol = "X") {
    return {
        symbol,
        field: cloneArrDeep(defaultField)
    };
};
