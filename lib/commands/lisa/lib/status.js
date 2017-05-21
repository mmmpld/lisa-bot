"use strict";

const stringify = require("./stringify");

const _default = function (highscore = 0) {
    return {
        water: 100,
        happiness: 100,
        isAlive: true,
        killer: null,
        deathBy: "something",
        birth: Date.now(),
        death: 0,
        highscore
    };
};

const get = function (app) {
    const lisa = app.dataPersisted.lisa;
    const statusCurrent = lisa.getKey("status") || _default();

    return statusCurrent;
};

const set = function (app, statusCurrent) {
    const lisa = app.dataPersisted.lisa;

    updateExternal(app, statusCurrent);

    lisa.setKey("status", statusCurrent);
    lisa.save(true);
};

const updateExternal = function (app, statusCurrent) {
    const statusCurrentText = stringify.floof(statusCurrent);

    app.bot.user.setGame(statusCurrentText);
};

const modify = function (app, statusCurrent, modifier, user) {
    let statusNew = statusCurrent;

    if (statusNew.isAlive) {
        if (modifier.water) {
            statusNew.water += modifier.water;

            if (statusNew.water > 150) {
                statusNew.happiness = 150;
                statusNew = kill(statusCurrent, "drowning", user);
            }
            if (statusNew.water <= 0) {
                statusNew.happiness = 0;
                statusNew = kill(statusCurrent, "dehydration", user);
            }
        }

        if (modifier.happiness) {
            statusNew.happiness += modifier.happiness;

            if (statusNew.happiness <= 0) {
                statusNew.happiness = 0;
                statusNew = kill(statusCurrent, "loneliness", user);
            }

            if (statusNew.happiness > 100) {
                statusNew.happiness = 100;
            }
        }

        set(app, statusNew);
    }

    return statusNew;
};

const kill = function (statusCurrent, deathBy, killer) {
    const statusNew = Object.assign({}, statusCurrent);
    let score;

    statusNew.death = Date.now();
    statusNew.isAlive = false;
    statusNew.deathBy = deathBy;
    statusNew.killer = killer;

    score = statusNew.death - statusNew.birth;

    if (score > statusNew.highscore) {
        statusNew.highscore = score;
    }

    return statusNew;
};

module.exports = {
    _default,
    get,
    set,
    updateExternal,
    modify,
    kill
};
