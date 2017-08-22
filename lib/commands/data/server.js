"use strict";

const stripData = require("di-ngy/lib/util/stripData");
const jsonToYaml = require("di-ngy/lib/util/jsonToYaml");

module.exports = function (args, msg) {
    const guild = msg.guild;

    return [jsonToYaml(stripData(guild)), "yaml"];
};
