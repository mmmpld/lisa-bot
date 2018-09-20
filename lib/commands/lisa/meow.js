"use strict";

const CAT_IDS = [
    "222957769131687936", // mmmpld
    "233534347758534656", // Mittens
    "434083643393179668" //CammoKitty95 
    ];

const basicTask = require("./lib/basicTask");

module.exports = function (args, msg, app) {
    const onSucess = ["_meow_", "aaaaaaaaaaa", "_meows in japanese_", "_does cute things_"];
    const onFailure = ["You're not a cat >_>"];
    const onDead = ["Dead plants can't meow"];
    const check = CAT_IDS.includes(msg.author.id);
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
