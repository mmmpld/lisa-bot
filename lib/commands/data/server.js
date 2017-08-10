"use strict";

const stripData = require("../lib/stripData");
const formatJson = require("../lib/formatJson");

module.exports = function (args, msg) {
    const guild = msg.guild;

    return [formatJson(stripData(guild)), "yaml"];
};
