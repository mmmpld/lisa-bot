"use strict";

const GOAT_IDS = ["169804264988868609", "178470784984023040", "143158243076734986", "128985967875850240", "273221196001181697"];

const basicTask = require("./lib/basicTask");

module.exports = function (args, msg, app) {
    const onSucess = ["baa", "baa~", "baaaaaaa ^w^", ":goat:"];
    const onFailure = ["You're not a goat uwu"];
    const onDead = ["baa? a dead Plant..."];
    const check = GOAT_IDS.includes(msg.author.id);
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
