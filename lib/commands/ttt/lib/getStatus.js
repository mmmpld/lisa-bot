"use strict";

const defaultStatus = require("./defaultStatus");

module.exports = function (app) {
    const ttt = app.dataPersisted.tictactoe;

    return ttt.getKey("status") || defaultStatus();
};
