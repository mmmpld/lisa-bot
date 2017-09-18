"use strict";

const GYA_IDS = ["146545496192843776", "168558770958499850", "178470784984023040"];

const basicTask = require("./lib/basicTask");

module.exports = function (args, msg, app) {
    const onSucess = ["Gya", "Gyarados", "Mega Gyarados"];
    const onFailure = ["you sure you gya?"];
    const onDead = ["OwO whats this? a dead Plant..."];
    const check = GYA_IDS.includes(msg.author.id);
    const modifier = {
        happiness: 20,
        water: 20
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
