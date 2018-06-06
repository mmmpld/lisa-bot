"use strict";

const basicTask = require("./lib/basicTask");

module.exports = function (args, msg, app) {
    const onSucess = ["_just a twist of lemon_", "_delicious but not very effective_", "_if life gives you lemons, give them to Plant_"];
    const onFailure = ["I don't like lemon _that_ much"];
    const onDead = ["Even lemon juice can't save poor plant..."];
    const currentWater = app.dataPersisted.plant._persisted.status.water;
    const currentHappiness = app.dataPersisted.plant._persisted.status.happiness;
    const willDrown = currentWater >= 149;
    let check = true;
    if (willDrown) {
        check = currentHappiness < 50; // only sad plant can drown
    }
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
