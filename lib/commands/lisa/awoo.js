"use strict";

const WOLF_IDS = ["247036714504290305", "216890985584525312", "153159950481358849", "146545496192843776"];
const statusGet = require("./lib/statusGet");
const statusModify = require("./lib/statusModify");
const stringifyStatus = require("./lib/stringifyStatus");
const randomFromArray = require("./lib/randomFromArray");

module.exports = function (args, msg, app) {
    const status = statusGet(app);

    if (WOLF_IDS.includes(msg.author.id)) {
        if (status.isAlive) {
            const statusNew = statusModify(app, {
                happiness: 30
            }, msg.author.username);
            const statusString = stringifyStatus(statusNew);
            const outputString = randomFromArray(["awooooooooooo", "awooo~ nwn", "awoo"]);

            return [outputString, statusString].join("\n");
        } else {
            return "OwO whats this? a dead Lisa...";
        }
    } else {
        return "You're not a wolf uwu";
    }
};
