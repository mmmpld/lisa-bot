"use strict";

const stripData = require("./lib/stripData");

module.exports = function (args, msg, app) {
    const guild = msg.guild;
    const result = JSON.stringify(stripData(guild), null, "  ");

    return [result, "json", []];
};
