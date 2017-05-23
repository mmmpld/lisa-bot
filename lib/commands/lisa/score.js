
"use strict";

const status = require("./lib/status");
const score = require("./lib/score");
const stringify = require("./lib/stringify");

module.exports = function (args, msg, app) {
    const statusCurrent = status.get(app);
    const scoreCurrent = score.get(app);
    const lifetimeString = stringify.humanize(stringify.getLifeTime(statusCurrent,Date.now()));
    const highscoreString = stringify.humanize(scoreCurrent.highscore);

    return `Lisa has been going for ${lifetimeString}, the highscore is ${highscoreString}`;
};
