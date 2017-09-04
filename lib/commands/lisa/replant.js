"use strict";

const status = require("./lib/status");
const randomFromArray = require("../lib/randomFromArray");

module.exports = function (args, msg, app) {
    const currentStatus = status.get(app);

    if (!currentStatus.isAlive) {
        status.set(app, status._default());

        return randomFromArray(["_Some days I wake up and feel like I could take on the world, full of life and energy_", "_I find myself wishing I was born a human_"]);
    } else {
        return "Plant is still alive!";
    }
};
