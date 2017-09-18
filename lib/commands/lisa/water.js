"use strict";

const basicTask = require("./lib/basicTask");

module.exports = function (args, msg, app) {
    const onSucess = ["_is being watered_", "_water noises_", "_watering noises_", "_you hear plant sucking up the water_"];
    const onFailure = [];
    const onDead = ["It's too late to water poor plant..."];
    const check = true;
    const modifier = {
        water: 25
    };

    return basicTask(
        msg,
        app,
        check,
        modifier,
        onSucess,
        onFailure,
        onDead
    );
};
