"use strict";

const RAI_IDS = ["103878985343062016"];

const basicTask = require("./lib/basicTask");

module.exports = function (args, msg, app) {
    const onSucess = ["Raice", "Raifu", "Raid", "Raisin", "Craiy", "Graiy"];
    const onFailure = ["You're not a rai uwu"];
    const onDead = ["OwO whats this? a dead Lisa..."];
    const check = RAI_IDS.includes(msg.author.id);
    const modifier = {
        happiness: 30
    };

    return basicTask(
        msg,
        app,
        check,
        modifier,
        onSucess,
        onFailure,
        onDead
    );
};
