"use strict";

const status = require("./lib/status");
const randomFromArray = require("../lib/randomFromArray");

module.exports = function (args, msg, app) {
    const statusCurrent = status.get(app);

    if (statusCurrent.isAlive) {
        const topic = randomFromArray(["Leaves", "Grass", "Chlorophyl", "Trees", "Food", "Pizza", "Cuteness", "Memes", "Petrichor"]);

        return `Let's talk about ${topic}!`;
    } else {
        return "Dead plants tell no tales...";
    }
};
