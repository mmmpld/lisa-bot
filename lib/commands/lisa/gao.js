"use strict";

const SQUILLA_IDS = ["78541183818674176", "236226432970391556"];

const basicTask = require("./lib/basicTask");

module.exports = function (args, msg, app) {
    const onSucess = ["GAO"];
    const onFailure = ["You're not a squilla uwu"];
    const onDead = ["OwO whats this? a dead Plant..."];
    const check = SQUILLA_IDS.includes(msg.author.id);
    const modifier = {
        happiness: 30
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
