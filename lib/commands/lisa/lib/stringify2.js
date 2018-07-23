"use strict";

const moment = require("moment");
const calc = require("./calc");

const humanize = duration => moment.duration(duration).humanize();
const millisecondsToMinutes = ms => Math.round(ms / 1000 / 60);

const floof = function (statusCurrent) {
    const statusCurrentNumber = calc.statusToNumber(statusCurrent);

    if (statusCurrentNumber > 150) {
        return "at the verge of drowing.";
    } else if (statusCurrentNumber > 125) {
        return "doing too well.";
    } else if (statusCurrentNumber > 100) {
        return "doing good.";
    } else if (statusCurrentNumber > 75) {
        return "growing happily.";
    } else if (statusCurrentNumber > 50) {
        return "doing fine.";
    } else if (statusCurrentNumber > 25) {
        return "looking sturdy.";
    } else if (statusCurrentNumber > 20) {
        return "I just wish more people cared about me.";
    } else if (statusCurrentNumber > 15) {
        return "I've been neglected.";
    } else if (statusCurrentNumber > 0) {
        return "close to dying.";
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
        const lifetimeString = humanize(calc.getLifeTime(statusCurrent, statusCurrent.death));
        const sinceDeathString = humanize(Date.now() - statusCurrent.death);
        const highscoreString = humanize(scoreCurrent.highscore);

        return [
            `Plant died ${sinceDeathString} ago, and was alive for ${lifetimeString}.`,
            `Killed by ${statusCurrent.killer} through ${statusCurrent.deathBy}.`,
            `The longest Plant lived was ${highscoreString}.`
        ].join("\n");
    }
};

const score = function (statusCurrent, scoreCurrent) {
    if (statusCurrent.isAlive) {
        const lifetime = calc.getLifeTime(statusCurrent, Date.now());
        const lifetimeString = humanizeDuration(lifetime);//humanize(lifetime);
        const highscore = lifetime > scoreCurrent.highscore ? lifetime : scoreCurrent.highscore;
        const highscoreString = humanizeDuration(highscore);//humanize(highscore);

        return [
            `Plant has been going for ${lifetimeString}(${millisecondsToMinutes(lifetime)} minutes).`,
            `The highscore is ${highscoreString}(${millisecondsToMinutes(highscore)} minutes)`
        ].join("\n");
    } else {
        return status(statusCurrent, scoreCurrent);
    }
};

const humanizeDuration = function(eventDuration){
    let eventMDuration = moment.duration(eventDuration);//, 'seconds');
    let eventDurationString = "";
    if (eventMDuration.months() > 0) eventDurationString += " " + moment.duration(eventMDuration.months(), 'months').humanize();
    if (eventMDuration.days() > 0) eventDurationString += " " + moment.duration(eventMDuration.days(), 'days').humanize();
    if (eventMDuration.hours() > 0) eventDurationString += " " + moment.duration(eventMDuration.hours(), 'hours').humanize();
    if (eventMDuration.minutes() > 0) eventDurationString += " " + moment.duration(eventMDuration.minutes(), 'minutes').humanize();
    return eventDurationString.trim();
}

module.exports = {
    humanize,
    floof,
    status,
    score
};
