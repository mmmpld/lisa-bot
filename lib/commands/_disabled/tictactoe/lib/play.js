"use strict";

const cloneDeep = require("./cloneDeep");

const canPlace = function (field, x, y) {
    return field[y][x] === " ";
};

const place = function (field, x, y, symbol) {
    const newField = cloneDeep(field);

    console.log(field, x, y, symbol);

    newField[y][x] = symbol;

    return newField;
};

const checkForWinner = function (field) {
    const arrMatches = (a, b) => a !== " " && a === b ? a : false;

    //Row
    for (let y = 0; y < 3; y++) {
        const row = field[y];
        const rowReduced = row.reduce(arrMatches);

        if (rowReduced) {
            return rowReduced;
        }
    }

    //Column
    for (let x = 0; x < 3; x++) {
        const column = [field[0][x], field[1][x], field[2][x]];
        const columnReduced = column.reduce(arrMatches);

        if (columnReduced) {
            return columnReduced;
        }
    }

    //Diagonal
    const diagonal1 = [field[0][0], field[1][1], field[2][2]];
    const diagonal1Reduced = diagonal1.reduce(arrMatches);

    if (diagonal1Reduced) {
        return diagonal1Reduced;
    }

    const diagonal2 = [field[0][2], field[1][1], field[2][0]];
    const diagonal2Reduced = diagonal2.reduce(arrMatches);

    if (diagonal2Reduced) {
        return diagonal2Reduced;
    }

    return false;
};

module.exports = {
    canPlace,
    place,
    checkForWinner
};
