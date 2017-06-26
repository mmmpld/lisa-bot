"use strict";

const sortStr = require("../lib/sortStr");

module.exports = function (args, msg, app) {
    const roles = msg.guild.roles.array();
    const result = roles
        .map(role => role.name)
        .sort(sortStr)
        .join("\n");

    return [result, "md", []];
};
