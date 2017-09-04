"use strict";

const status = require("./lib/status");
const randomFromArray = require("../lib/randomFromArray");

module.exports = function (args, msg, app) {
    const currentStatus = status.get(app);

    if (!currentStatus.isAlive) {
        status.set(app, status._default());

        return randomFromArray(["_is being replanted_", "_you plant a clone of Plant_", "_plants a new Plant on top of the remnants of her ancestors_"]);
    } else {
        return "Plant is still alive!";
    }
};
