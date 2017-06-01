"use strict";

const moment = require("moment");

const MAX_WATER = 100;
const MAX_HAPPINESS = 100;
const FACTOR = (MAX_WATER + MAX_HAPPINESS) / 2;

const humanize = duration => moment.duration(duration).humanize();

const getLifeTime = (statusCurrent, until) => until - statusCurrent.birth;

const floof = function (statusCurrent) {
    if (statusCurrent.isAlive) {
        const relWater = statusCurrent.water / MAX_WATER;
        const relHappiness = statusCurrent.happiness / MAX_HAPPINESS;
        const val = relWater * relHappiness * FACTOR;

        if (val > 150) {
            return "at the verge of death.";
        } else if (val > 125) {
            return "doing too well.";
        } else if (val > 100) {
            return "doing good.";
        } else if (val > 75) {
            return "growing happily.";
        } else if (val > 50) {
            return "doing fine.";
        } else if (val > 25) {
            return "looking sturdy.";
        } else {
            return "close to dying.";
        }
    } else {
        return "is dead.";
    }
};

const status = function (statusCurrent, scoreCurrent) {
    if (statusCurrent.isAlive) {
        const waterLevel = Math.floor(statusCurrent.water);
        const happinessLevel = Math.floor(statusCurrent.happiness);
        const textFloof = floof(statusCurrent);
        const textRaw = `Water: ${waterLevel}% | Happiness: ${happinessLevel}%.`;

        return [textFloof, textRaw].join("\n");
    } else {
        const lifetimeString = humanize(getLifeTime(statusCurrent, statusCurrent.death));
        const sinceDeathString = humanize(Date.now() - statusCurrent.death);
        const highscoreString = humanize(scoreCurrent.highscore);

        return [
            `Lisa died ${sinceDeathString} ago, and was alive for ${lifetimeString}.`,
            `Killed by ${statusCurrent.killer} through ${statusCurrent.deathBy}.`,
            `The longest Lisa lived was ${highscoreString}.`
        ].join("\n");
    }
};

const score = function (statusCurrent, scoreCurrent) {
    if (statusCurrent.isAlive) {
        const lifetimeString = humanize(getLifeTime(statusCurrent, Date.now()));
        const highscoreString = humanize(scoreCurrent.highscore);

        return `Lisa has been going for ${lifetimeString}, the highscore is ${highscoreString}`;
    } else {
        return status(statusCurrent, scoreCurrent);
    }
};

module.exports = {
    humanize,
    getLifeTime,
    floof,
    status,
    score
};
