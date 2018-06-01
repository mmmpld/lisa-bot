"use strict";

const basicTask = require("./lib/basicTask");

module.exports = function (args, msg, app) {
    const onSucess = ["_now you're starting to get it, let's sing it again!_", "_your singing makes me feel warm and fuzzy_"];
    const onFailure = [];
    const onDead = ["Dead plants can't listen (probably)"];
    const check = true;
    const modifier = {
        happiness: Math.random() > 0.5 ? 15 : 25
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
