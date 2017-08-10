"use strict";

const stripData = require("../lib/stripData");
const formatJson = require("../lib/formatJson");

module.exports = function (args, msg) {
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

    return [formatJson(stripData(user)), "yaml"];
};
