"use strict";

const statusGetDefault = require("./statusGetDefault");

module.exports = function (app) {
    const lisa = app.dataPersisted.lisa;
    const status = lisa.getKey("status") || statusGetDefault();

    return status;
};
