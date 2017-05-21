"use strict";

const pieces = {
    "T": [
        [0, 0],
        [1, 0],
        [0, -1],
        [-1, 0],
        [4, 0]
    ],
    "L": [
        [0, 0],
        [-1, 0],
        [-1, -1],
        [1, 0],
        [4, 0]
    ],
    "J": [
        [0, 0],
        [-1, 0],
        [1, -1],
        [1, 0],
        [4, 0]
    ],
    "S": [
        [0, 0],
        [-1, 0],
        [1, -1],
        [0, -1],
        [2, 0]
    ],
    "Z": [
        [0, 0],
        [1, 0],
        [-1, -1],
        [0, -1],
        [2, 0]
    ],
    "I": [
        [0, 0],
        [-1, 0],
        [2, 0],
        [1, 0],
        [2, 0]
    ],
    "O": [
        [0, 0],
        [1, 0],
        [1, -1],
        [0, -1],
        [1, 0]
    ]
};

module.exports = function (field, x, y, symbol) {
    const newField = Array.from[field];

    if (newField[y][x] === " ") {
        newField[y][x] = symbol;

        return newField;
    } else {
        return false;
    }
};
