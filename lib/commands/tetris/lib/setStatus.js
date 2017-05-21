"use strict";

module.exports = function (app, status) {
    const ttt = app.dataPersisted.tetris;

    ttt.setKey("status", status);
    ttt.save(true);
};
