"use strict";

const _default = function (highscore = 0) {
    return {
        highscore
    };
};

const get = function (app) {
    const plant = app.dataPersisted.plant;
    const scoreCurrent = plant.getKey("score") || _default();

    return scoreCurrent;
};

const set = function (app, scoreCurrent) {
    const plant = app.dataPersisted.plant;

    plant.setKey("score", scoreCurrent);
    plant.save(true);
};

module.exports = {
    _default,
    get,
    set
};
