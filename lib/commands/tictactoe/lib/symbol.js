"use strict";

const SYMBOLS = ["X", "O"];

const _default = function () {
    return SYMBOLS[0];
};

const get = function (app) {
    const tictactoe = app.dataPersisted.tictactoe;
    const symbolCurrent = tictactoe.getKey("symbol") || _default();

    return symbolCurrent;
};

const set = function (app, symbolCurrent) {
    const tictactoe = app.dataPersisted.tictactoe;

    tictactoe.setKey("symbol", symbolCurrent);
    tictactoe.save(true);
};

const toggle = function (symbol) {
    return symbol === SYMBOLS[0] ? SYMBOLS[1] : SYMBOLS[0];
};

module.exports = {
    _default,
    get,
    set,
    toggle,
};
