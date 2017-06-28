"use strict";

const stripData = require("./lib/stripData");

module.exports = function (args, msg, app) {
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

    const result = JSON.stringify(stripData(channel), null, "  ");

    return [result, "json", []];
};
