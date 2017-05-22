"use strict";

const _default = function (highscore = 0) {
    return {
        highscore
    };
};

const get = function (app) {
    const lisa = app.dataPersisted.lisa;
    const scoreCurrent = lisa.getKey("score") || _default();

    return scoreCurrent;
};

const set = function (app, scoreCurrent) {
    const lisa = app.dataPersisted.lisa;

    lisa.setKey("score", scoreCurrent);
    lisa.save(true);
};

module.exports = {
    _default,
    get,
    set
};
