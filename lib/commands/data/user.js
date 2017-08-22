"use strict";

const stripData = require("di-ngy/lib/util/stripData");
const jsonToYaml = require("di-ngy/lib/util/jsonToYaml");

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

    return [jsonToYaml(stripData(user)), "yaml"];
};
