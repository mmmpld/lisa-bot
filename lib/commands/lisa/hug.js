"use strict";

const basicTask = require("./lib/basicTask");

module.exports = function (args, msg, app) {
    const onSucess = ["_is hug_", "_is hugged_", "_is hugged in french_", "_Humans are so warm :)_", "_The world would be a better place if everyone would hug us... Instead of eating us._"];
    const onFailure = [];
    const onDead = ["It's too late to hug poor Plant..."];
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
