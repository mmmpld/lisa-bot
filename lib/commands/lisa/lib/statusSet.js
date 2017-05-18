"use strict";

const statusNowPlaying = require("./statusNowPlaying");

module.exports = function (app, status) {
    const lisa = app.dataPersisted.lisa;

    statusNowPlaying(app, status);
    lisa.setKey("status", status);
    lisa.save(true);
};
