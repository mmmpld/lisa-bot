"use strict";

module.exports = function (app, status) {
    const ttt = app.dataPersisted.tictactoe;

    ttt.setKey("status", status);
    ttt.save(true);
};
