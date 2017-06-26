"use strict";

const sortStr = require("../lib/sortStr");

module.exports = function (args, msg, app) {
    const roles = msg.guild.roles.array();
    const result = roles
        .sort((a, b) => b.members.array().length - a.members.array().length || sortStr(a.name, b.name))
        .map(role => `${role.name}: ${role.members.array().length}`)
        .join("\n");

    return [result, "md", []];
};
