"use strict";

const cloneDeep = require("./cloneDeep");

const fieldDefault = new Array(20).fill((new Array(10)).fill(" "));

const _default = function () {
    return cloneDeep(fieldDefault);
};

const get = function (app) {
    const tetris = app.dataPersisted.tetris;
    const statusCurrent = tetris.getKey("field") || _default();

    return statusCurrent;
};

const set = function (app, statusCurrent) {
    const tetris = app.dataPersisted.tetris;

    tetris.setKey("field", statusCurrent);
    tetris.save(true);
};

const modify = function (app, statusCurrent, modifier, user) {
    let statusNew = statusCurrent;

    return statusNew;
};

module.exports = {
    _default,
    get,
    set,
    modify,
};
