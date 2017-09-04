"use strict";

const basicTask = require("./lib/basicTask");

module.exports = function (args, msg, app) {
    const onSucess = ["_I just wish you would stop killing and eating us_", "_You know, it hurts when we die. You just can't hear us scream_", "_Thank you for not killing me Poppy_"];
    const onFailure = [];
    const onDead = ["The dead feel no pain..."];
    const check = true;
    const modifier = {
        happiness: -10
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
