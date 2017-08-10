"use strict";

const stripData = require("../lib/stripData");
const formatJson = require("../lib/formatJson");

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

    return [formatJson(stripData(channel)), "yaml"];
};
