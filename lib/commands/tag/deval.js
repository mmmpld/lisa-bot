"use strict";

const Yna = require("ynajs");

module.exports = function (args, msg, app, cliLookup) {
    const tagInstance = new Yna(args.yna);
    const tree = JSON.stringify(tagInstance.tree);

    console.log(tagInstance,tree)

    return [tree, "json"];
};
