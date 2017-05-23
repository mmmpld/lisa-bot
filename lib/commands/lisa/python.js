"use strict";

const PYTHON_IDS = ["78541183818674176"];

const basicTask = require("./lib/basicTask");

module.exports = function (args, msg, app) {
    const onSucess = ["no curly boys", "I'd like some semicolons please", "squas is an awesome coder"];
    const onFailure = ["You're not a squas /)w(\\"];
    const onDead = ["OwO whats this? a dead Lisa..."];
    const check = PYTHON_IDS.includes(msg.author.id);
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
