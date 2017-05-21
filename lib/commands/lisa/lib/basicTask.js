"use strict";

const status = require("./status");
const stringify = require("./stringify");
const randomFromArray = require("./randomFromArray");

module.exports = function (msg, app, check, modifier, onSuccess, onFailure, onDead) {
    const statusCurrent = status.get(app);

    if (statusCurrent.isAlive) {
        if (check) {
            const statusNew = status.modify(app, statusCurrent, modifier, msg.author.username);

            return [randomFromArray(onSuccess), stringify.status(statusNew)].join("\n");
        } else {
            return randomFromArray(onFailure);
        }
    } else {
        return randomFromArray(onDead);
    }
};
