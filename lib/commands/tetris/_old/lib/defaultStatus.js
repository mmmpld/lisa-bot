"use strict";

const field = new Array(22).fill((new Array(10)).fill(" "));

const cloneArrDeep = arr => Array.from(arr.map(row => Array.from(row)));

module.exports = function (highscore = 0) {
    return {
        field: cloneArrDeep(field),
        queue: [],
        current: null,
        points: 0,
        points_max: highscore
    };
};
