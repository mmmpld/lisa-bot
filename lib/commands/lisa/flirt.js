"use strict";

const basicTask = require("./lib/basicTask");

module.exports = function (args, msg, app) {
    const onSucess = ["_Lisa wiggles her leaves at you_", "_Lisa looks in your eyes :eyes:_"];
    const onFailure = ["_Lisa waggles away_", "_Lisa awkardly laughs_"];
    const onDead = ["Dead plants can't flirt (probably)"];
    const check = Math.random > 0.5;
    const modifier = {
        happiness: 20,
        water: 10
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
