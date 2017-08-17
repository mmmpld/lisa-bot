"use strict";

const Yna = require("ynajs");

module.exports = function (args) {
    const tagInstance = new Yna(args.yna, {
        plugins: {
            discord: true
        }
    });
    const tree = JSON.stringify(tagInstance.tree);

    return [tree, "json"];
};
