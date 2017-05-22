"use strict";

const cloneDeep = require("./cloneDeep");

const fieldDefault = new Array(3).fill((new Array(3)).fill(" "));

const _default = function () {
    return cloneDeep(fieldDefault);
};

const get = function (app) {
    const tictactoe = app.dataPersisted.tictactoe;
    const statusCurrent = tictactoe.getKey("field") || _default();

    return statusCurrent;
};

const set = function (app, statusCurrent) {
    const tictactoe = app.dataPersisted.tictactoe;

    tictactoe.setKey("field", statusCurrent);
    tictactoe.save(true);
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
