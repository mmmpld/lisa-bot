"use strict";

const getStatus = require("./lib/getStatus");
const setStatus = require("./lib/setStatus");
const defaultStatus = require("./lib/defaultStatus");

module.exports = function (args, msg, app) {
    const symbol = getStatus(app).symbol;
    const newStatus = defaultStatus(symbol);

    setStatus(app, newStatus);

    return "Field has been reset";
};
