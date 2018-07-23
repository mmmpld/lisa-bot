"use strict";

const status = require("./lib/status");
const score = require("./lib/score");
const stringify = require("./lib/stringify2");

module.exports = function (args, msg, app) {
    const statusCurrent = status.get(app);
    const scoreCurrent = score.get(app);

    return stringify.score(statusCurrent, scoreCurrent);
};
