"use strict";

const basicTask = require("./lib/basicTask");

module.exports = function (args, msg, app) {
    const onSucess = ["_just a twist of lemon_", "_delicious but not very effective_", "_if life gives you lemons, give them to Plant_"];
    const onFailure = [];
    const onDead = ["Even lemon juice can't save poor plant..."];
    const check = true;
    const modifier = {
        water: 1
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
