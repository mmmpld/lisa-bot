"use strict";

const status = require("../commands/lisa/lib/status");

module.exports = function (msg, app) {
    const currentStatus = status.get(app);

    status.modify(app, currentStatus, {
        happiness: 0.5
    }, "Activity");
};
