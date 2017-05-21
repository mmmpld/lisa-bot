"use strict";

const moment = require("moment");

const MAX_WATER = 100;
const MAX_HAPPINESS = 100;
const FACTOR = (MAX_WATER + MAX_HAPPINESS) / 2;

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

const status = function (statusCurrent) {
    if (statusCurrent.isAlive) {
        const waterLevel = Math.floor(statusCurrent.water);
        const happinessLevel = Math.floor(statusCurrent.happiness);
        const textFloof = floof(statusCurrent);
        const textRaw = `Water: ${waterLevel}% | Happiness: ${happinessLevel}%.`;

        return [textFloof, textRaw].join("\n");
    } else {
        const lifetime = statusCurrent.death - statusCurrent.birth;
        const lifetimeString = moment.duration(lifetime).humanize();
        const highscoreString = moment.duration(statusCurrent.highscore).humanize();
        const textIntro = `Lisa is dead, killed by ${statusCurrent.killer} through ${statusCurrent.deathBy}.`;
        const textScore = `She was alive for ${lifetimeString}, the highscore was ${highscoreString}.`;

        return [textIntro, textScore].join("\n");
    }
};

module.exports = {
    floof,
    status
};
