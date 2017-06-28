"use strict";

const stripData = require("./lib/stripData");

module.exports = function (args, msg, app) {
    const guild = msg.guild;
    let user;

    if (args.id !== null) {
        if (guild.members.has(args.id)) {
            user = guild.members.get(args.id);
        } else {
            return "ID not found";
        }
    } else {
        user = msg.member;
    }

    const result = JSON.stringify(stripData(user), null, "  ");

    return [result, "json", []];
};
