"use strict";

const stripData = require("di-ngy/lib/util/stripData");
const jsonToYaml = require("di-ngy/lib/util/jsonToYaml");

module.exports = function (args, msg) {
    const guild = msg.guild;
    let channel;

    if (args.id !== null) {
        if (guild.channels.has(args.id)) {
            channel = guild.channels.get(args.id);
        } else {
            return "ID not found";
        }
    } else {
        channel = msg.channel;
    }

    return [jsonToYaml(stripData(channel)), "yaml"];
};
