"use strict";

const basicTask = require("./lib/basicTask");

module.exports = function (args, msg, app) {
    const onSucess = ["_is being watered_", "_water noises_", "_watering noises_", "_you hear plant sucking up the water_", "_Thank you for not killing me!_", "_I think water and light are the best food out there!_","_Everyone should drink water!_"];
    const onFailure = ["Too happy to let the water bother me"];
    const onDead = ["It's too late to water poor plant..."];
    const currentWater = app.dataPersisted.plant._persisted.status.water;
    const currentHappiness = app.dataPersisted.plant._persisted.status.happiness;
    const willDrown = currentWater >= 125;
    let check = true;
    if (willDrown) {
        check = currentHappiness < 50; // only sad plant can drown
    }
    const modifier = {
        water: 25
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
