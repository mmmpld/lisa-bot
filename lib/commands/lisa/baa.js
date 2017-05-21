"use strict";

const GOAT_IDS = ["169804264988868609", "178470784984023040", "143158243076734986", "128985967875850240"];
const statusGet = require("./lib/statusGet");
const statusModify = require("./lib/statusModify");
const stringifyStatus = require("./lib/stringifyStatus");
const randomFromArray = require("./lib/randomFromArray");

module.exports = function (args, msg, app) {
    const status = statusGet(app);

    if (GOAT_IDS.includes(msg.author.id)) {
        if (status.isAlive) {
            const statusNew = statusModify(app, {
                happiness: 30
            }, msg.author.username);
            const statusString = stringifyStatus(statusNew);
            const outputString = randomFromArray(["baa", "baa~", "baaaaaaa ^w^"]);

            return [outputString, statusString].join("\n");
        } else {
            return "OwO whats this? a dead Lisa...";
        }
    } else {
        return "You're not a goat uwu";
    }
};
