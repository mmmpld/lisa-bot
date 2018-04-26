"use strict";

const sortStr = require("../lib/sortStr");

module.exports = function (args, msg) {
    const servers = msg.client.guilds.array();
    const result = servers
        .map(server => server.name & ": " & server.id)
        .sort(sortStr)
        .join("\n");

    return [result, "md", []];
};
