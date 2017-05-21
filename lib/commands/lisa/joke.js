"use strict";

const basicTask = require("./lib/basicTask");

module.exports = function (args, msg, app) {
    const onSucess = ["What's up Leafy here", "Why do trees have so many friends? They branch out.", "A photographer was great at botany because he knew photo synthesis.", "When the plums dry on your tree, it's time to prune.", "The tree that was creating energy was turned into a power-plant.", "My fear of roses is a thorny issue. I'm not sure what it stems from, but it seems likely I'll be stuck with it.", "	The raisin wined about how he couldn't achieve grapeness.", "I can't find my rutabaga. I hope it will turnip."];
    const onFailure = [];
    const onDead = ["Dead plants can't listen (probably)"];
    const check = true;
    const modifier = {
        happiness: Math.random() > 0.5 ? -10 : 20
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
