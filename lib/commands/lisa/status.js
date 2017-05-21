"use strict";

const status = require("./lib/status");
const stringify = require("./lib/stringify");

module.exports = function (args, msg, app) {
    const statusCurrent = status.get(app);
    const statusText = stringify.status(statusCurrent);

    return statusText;
};
