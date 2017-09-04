"use strict";

const basicTask = require("./lib/basicTask");

module.exports = function (args, msg, app) {
    const onSucess = ["_you hear muffled plant screams as you set Plant on fire_", "_Plant looks at you, judging your actions_", "AAAAAAAAAAAAAAAAAAAAAAAAAAAA"];
    const onFailure = [];
    const onDead = ["Plant is already dead!"];
    const check = true;
    const modifier = {
        water: -200
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
