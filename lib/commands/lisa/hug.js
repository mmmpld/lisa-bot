"use strict";

const basicTask = require("./lib/basicTask");

module.exports = function (args, msg, app) {
    const onSucess = ["_is hug_", "_is hugged_", "_is hugged in french_"];
    const onFailure = [];
    const onDead = ["It's too late to hug poor Lisa..."];
    const check = true;
    const modifier = {
        happiness: 20
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
