"use strict";

const SYMBOLS = ["X", "O"];

const _default = function () {
    return SYMBOLS[0];
};

const get = function (app) {
    const tetris = app.dataPersisted.tetris;
    const symbolCurrent = tetris.getKey("symbol") || _default();

    return symbolCurrent;
};

const set = function (app, symbolCurrent) {
    const tetris = app.dataPersisted.tetris;

    tetris.setKey("symbol", symbolCurrent);
    tetris.save(true);
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
