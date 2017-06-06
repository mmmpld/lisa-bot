"use strict";

const WOLF_IDS = ["247036714504290305", "216890985584525312", "153159950481358849", "146545496192843776"];

const basicTask = require("./lib/basicTask");

module.exports = function (args, msg, app) {
    const onSucess = ["awooooooooooo", "awooo~ nwn", "awoo", "awoos in swedish", "awoos in indian", "awoos in danish"];
    const onFailure = ["You're not a wolf uwu"];
    const onDead = ["OwO whats this? a dead Lisa..."];
    const check = WOLF_IDS.includes(msg.author.id);
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
