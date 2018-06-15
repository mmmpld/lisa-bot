"use strict";

const basicTask = require("./lib/basicTask");

module.exports = function (args, msg, app) {
    const onSucess = ["_you hear muffled plant screams as you set Plant on fire_", "_Plant looks at you, judging your actions_", "AAAAAAAAAAAAAAAAAAAAAAAAAAAA"];
    const onFailure = ["Plant is well hydrated and not feeling very combustible"];
    const onDead = ["Plant is already dead!"];
    const currentWater = app.dataPersisted.plant._persisted.status.water;
    const check = currentWater <= 50;
    const modifier = {
        water: -20
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
